from fastapi import HTTPException

# Transformation function to structure data based on graph type
def transform_data(graph_type: str, raw_data):
    transformed_data = {}

    if graph_type == "voltage":
        # Extract voltage data (V1, V2, V3)
        transformed_data["voltage1"] = [record['property'].get('V1_Voltage', None) for record in raw_data]
        transformed_data["voltage2"] = [record['property'].get('V2_Voltage', None) for record in raw_data]
        transformed_data["voltage3"] = [record['property'].get('V3_Voltage', None) for record in raw_data]

    elif graph_type == "current":
        # Extract current data (I1, I2, I3)
        transformed_data["current1"] = [record['property'].get('I1_Current', None) for record in raw_data]
        transformed_data["current2"] = [record['property'].get('I2_Current', None) for record in raw_data]
        transformed_data["current3"] = [record['property'].get('I3_Current', None) for record in raw_data]

    elif graph_type == "power":
        # Extract power data (KW, Kvar, KVA, PF)
        transformed_data["KW_L1"] = [record['property'].get('KW_L1', None) for record in raw_data]
        transformed_data["KW_L2"] = [record['property'].get('KW_L2', None) for record in raw_data]
        transformed_data["KW_L3"] = [record['property'].get('KW_L3', None) for record in raw_data]
        transformed_data["Total_KW"] = [record['property'].get('Total_KW', None) for record in raw_data]

    else:
        raise HTTPException(status_code=400, detail="Invalid graph type requested")

    return transformed_data