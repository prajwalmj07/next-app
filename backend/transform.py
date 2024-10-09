from fastapi import HTTPException
from scaling import load_scaling_factors, scale_values

# Load scaling factors
SCALING_FACTORS_FILE = 'calibration.json'
scaling_factors = load_scaling_factors(SCALING_FACTORS_FILE)

def extract_device_info(raw_data):
    device_data = raw_data[0]['property']
    
    
    device_info = {
        "serialNumber": device_data.get('serial number', None),
        "macAddress": device_data.get('mac address', None),
        "version": device_data.get('version', None),
        "status": device_data.get('status', None),
    }

    return device_info

# Transformation function to structure data based on graph type
def transform_data(graph_type: str, raw_data):
    transformed_data = {
        "date": [], 
        "time": [], 
        "voltage1": [],  
        "voltage2": [], 
        "voltage3": [],  
        "current1": [], 
        "current2": [], 
        "current3": [], 
        "KW_L1": [],     
        "KW_L2": [],     
        "KW_L3": [],     
        "Total_KW": []   
    }

    for record in raw_data:
        timestamp = record.get('created_at', None)
        if timestamp:
            date, time = timestamp.split('T')  # Split timestamp into date and time
            transformed_data["date"].append(date)
            transformed_data["time"].append(time.split('.')[0])  # Split to remove milliseconds
        
        properties = record['property']
        serial_number = properties.get('serial number')

        # Scale values based on graph type
        scaled_properties = scale_values(serial_number, properties, scaling_factors)

        if graph_type == "voltage":
            transformed_data["voltage1"].append(scaled_properties.get('V1_Voltage', None))
            transformed_data["voltage2"].append(scaled_properties.get('V2_Voltage', None))
            transformed_data["voltage3"].append(scaled_properties.get('V3_Voltage', None))

        elif graph_type == "current":
            transformed_data["current1"].append(scaled_properties.get('I1_Current', None))
            transformed_data["current2"].append(scaled_properties.get('I2_Current', None))
            transformed_data["current3"].append(scaled_properties.get('I3_Current', None))

        elif graph_type == "power":
            transformed_data["KW_L1"].append(scaled_properties.get('KW_L1', None))
            transformed_data["KW_L2"].append(scaled_properties.get('KW_L2', None))
            transformed_data["KW_L3"].append(scaled_properties.get('KW_L3', None))
            transformed_data["Total_KW"].append(scaled_properties.get('Total_KW', None))

        else:
            raise HTTPException(status_code=400, detail="Invalid graph type requested")

    # Filter out only the relevant fields based on graph type
    if graph_type == "voltage":
        return {k: transformed_data[k] for k in ["date", "time", "voltage1", "voltage2", "voltage3"]}
    elif graph_type == "current":
        return {k: transformed_data[k] for k in ["date", "time", "current1", "current2", "current3"]}
    elif graph_type == "power":
        return {k: transformed_data[k] for k in ["date", "time", "KW_L1", "KW_L2", "KW_L3", "Total_KW"]}

    return transformed_data