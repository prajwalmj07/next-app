const express = require('express');
const cors = require('cors');  // Import cors
const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// The main API URL (Replace with your actual API URL)
const apiUrl = 'https://device-services-maya.gentleplant-8ec40f17.centralindia.azurecontainerapps.io/api/device-service/v2/c09b7257-2c61-4854-8461-f9f8abeb6a68/device_management/fetch_chart_data';

// Function to perform the fetch request from the main API with dynamic serial number
async function fetchData(deviceSerialNumber, dataPerPage) {
    const { default: fetch } = await import('node-fetch'); // Dynamic import of node-fetch

    const requestData = {
        deviceSerialNumber: deviceSerialNumber, // Serial number passed dynamically
        type: "modon",
        data_per_page: dataPerPage, // Set number of records to fetch
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });
        const data = await response.json();
        return data.response.Payload; // Return the full payload
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// API endpoint to get energy meter data for a specific device
app.get('/api/:deviceSerial/energymeterdata', async (req, res) => {
    const deviceSerialNumber = req.params.deviceSerial;
    const dataPerPage = req.query.data_per_page || 1;

    const payload = await fetchData(deviceSerialNumber, dataPerPage);

    if (!payload) {
        return res.status(500).json({ error: 'Failed to fetch data' });
    }

    // Filter out empty or invalid records
    const validPayload = payload.filter(record => record && record.property);

    // Extract and transform the data into the requested format
    const transformedData = validPayload.map(record => {
        const deviceData = record.property || {};
        const timestamp = new Date(record.created_at || null);
        const date = timestamp.toISOString().split('T')[0] || null;
        const time = timestamp.toISOString().split('T')[1].split('.')[0] || null;

        return {
            energyMeterdata: {
                DVer: "Version 1.0",
                PVer: "Version 1.0",
                deviceID: deviceData["serial number"] || null,
                deviceCategory: "Energy Meter",
                sourceSitename: null,
                date: date,
                time: time,
                modelName: deviceData.modelname || null,
                deviceName: deviceData.devicename || null,
                version: deviceData.version || null,
                macAddress: deviceData["mac address"] || null,
                serialNumber: deviceData["serial number"] || null,
                IPADD: deviceData.IPADD || null,
                status: deviceData.status || null,
                voltage: {
                    V1: deviceData.V1_Voltage || null,
                    V2: deviceData.V2_Voltage || null,
                    V3: deviceData.V3_Voltage || null
                },
                current: {
                    I1: deviceData.I1_Current || null,
                    I2: deviceData.I2_Current || null,
                    I3: deviceData.I3_Current || null
                },
                power: {
                    KW: {
                        L1: deviceData.KW_L1 || null,
                        L2: deviceData.KW_L2 || null,
                        L3: deviceData.KW_L3 || null
                    },
                    Kvar: {
                        L1: deviceData.Kvar_L1 || null,
                        L2: deviceData.Kvar_L2 || null,
                        L3: deviceData.Kvar_L3 || null
                    },
                    KVA: {
                        L1: deviceData.KVA_L1 || null,
                        L2: deviceData.KVA_L2 || null,
                        L3: deviceData.KVA_L3 || null
                    },
                    PF: {
                        L1: deviceData.PF_L1 || null,
                        L2: deviceData.PF_L2 || null,
                        L3: deviceData.PF_L3 || null
                    },
                    Total: {
                        Kvar: deviceData.Total_Kvar || null,
                        KVA: deviceData.Total_KVA || null,
                        PF: deviceData.Total_PF || null,
                        KW: deviceData.Total_KW || null
                    }
                },
                energy: {
                    KwhImport: deviceData.Kwh_Import || null,
                    KVAhImport: deviceData.KVAh_import || null
                },
                network: {
                    act: deviceData.act || null,
                    rssi: deviceData.rssi || null,
                    wwanIp: deviceData.wwan_ip || null,
                    rsrp: deviceData.rsrp || null,
                    rsrq: deviceData.rsrq || null,
                    lte: {
                        rx: deviceData.lte_rx || null,
                        tx: deviceData.lte_tx || null,
                        bytes: deviceData.lte_bytes || null
                    }
                }
            }
        };
    });

    res.json(transformedData); // Send the transformed data as a response
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});