from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Literal
import httpx
import uvicorn
from transform import extract_device_info, transform_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# The API URL to fetch raw data
api_url = ''  # Update with your actual API URL

# Function to fetch raw data from the external API
async def fetch_data(deviceSerialNumber: str, dataPerPage: int):
    request_data = {
        "deviceSerialNumber": deviceSerialNumber,
        "type": "modon",
        "data_per_page": dataPerPage,
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(api_url, json=request_data)
            response.raise_for_status()
            data = response.json()
            return data['response']['Payload']  # Return the full payload
    except httpx.HTTPStatusError as e:
        print(f"HTTP error occurred: {e}")
        return None
    except Exception as e:
        print(f"Error fetching data: {e}")
        return None


@app.get("/api/fetch_graph_data/{deviceSerialNumber}/{graph_type}")
async def get_graph_data(
    deviceSerialNumber: str,
    graph_type: Literal[
        "voltage",
        "current",
        "power",
        "apparent_vs_reactive_power",
        "total_power",
        "frequency"
    ],
    data_per_page: int = 1
):
    # Fetch raw data from the backend API
    raw_data = await fetch_data(deviceSerialNumber, data_per_page)

    if not raw_data:
        raise HTTPException(status_code=500, detail="Failed to fetch data")

    # Filter valid records and transform the data based on graph type
    valid_data = [record for record in raw_data if 'property' in record]
    transformed_data = transform_data(graph_type, valid_data)

    return transformed_data

@app.get("/api/device_info/{device_serial}")
async def get_device_info(device_serial: str, data_per_page: int = 1):
    # Fetch raw data for the device based on serial number
    raw_data = await fetch_data(device_serial, data_per_page)

    if not raw_data:
        raise HTTPException(status_code=500, detail="Failed to fetch data")

    device_info = extract_device_info(raw_data)

    return {"device_info": device_info}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5000, reload=True)
