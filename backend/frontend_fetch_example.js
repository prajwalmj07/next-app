/* example outputs for api fetch with data_per_page as 2
Voltage Data: {
  voltage1: '226.4, 224.3',
  voltage2: '228.5, 227.4',
  voltage3: '228.9, 226.3'
}
Current Data: {
  current1: '3.998, 4.187',
  current2: '2.188, 2.372',
  current3: '0, 0'
}
 DateTime Data: [
  { date: '2024-09-02', time: '14:33:59' },
  { date: '2024-09-02', time: '13:47:03' }
]
*/ 

// Function to fetch voltage data from the backend API
function fetchVoltageData() {
    fetch('http://localhost:5000/api/voltage?data_per_page=2')
        .then(response => response.json())
        .then(data => {
            console.log('Voltage Data:', data);
            // You can process and use the voltage data here
        })
        .catch(error => {
            console.error('Error fetching voltage data:', error);
        });
}

// Function to fetch current data from the backend API
function fetchCurrentData() {
    fetch('http://localhost:5000/api/current?data_per_page=2')
        .then(response => response.json())
        .then(data => {
            console.log('Current Data:', data);
            // You can process and use the current data here
        })
        .catch(error => {
            console.error('Error fetching current data:', error);
        });
}

function fetchDateTime() {
    fetch('http://localhost:5000/api/deviceinfo?data_per_page=2')
        .then(response => response.json())
        .then(data => {
            console.log('DateTime Data:', data);
            // You can process and use the datetime data here
        })
        .catch(error => {
            console.error('Error fetching datetime data:', error);
        });
}
// Call the functions to fetch the data
fetchVoltageData();
fetchCurrentData();
fetchDateTime();


