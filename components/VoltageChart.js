// components/VoltageChart.js
'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const VoltageChart = () => {
  const [voltageData, setVoltageData] = useState({ voltage1: [], voltage2: [], voltage3: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoltageData = async () => {
      try {
        // Call your backend API to get the voltage data for the specific device serial number
        const response = await fetch('http://localhost:5000/api/WR2009000663/energymeterdata?data_per_page=6'); // Replace YOUR_DEVICE_SERIAL with actual device serial number
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log the data to inspect the structure

        // Extract voltage data from the API response
        const voltage1 = data.map(record => record.energyMeterdata.voltage.V1);
        const voltage2 = data.map(record => record.energyMeterdata.voltage.V2);
        const voltage3 = data.map(record => record.energyMeterdata.voltage.V3);

        // Update state with fetched voltage data
        setVoltageData({
          voltage1: voltage1.map(Number),
          voltage2: voltage2.map(Number),
          voltage3: voltage3.map(Number),
        });
      } catch (error) {
        console.error('Error fetching voltage data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVoltageData();
  }, []); // Empty dependency array means this effect runs once on component mount

  // Prepare chart data
  const labels = ['0s', '1s', '2s', '3s', '4s', '5s']; // Adjust labels as needed
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'V1',
        data: voltageData.voltage1,
        borderColor: 'orange',
        fill: false,
      },
      {
        label: 'V2',
        data: voltageData.voltage2,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'V3',
        data: voltageData.voltage3,
        borderColor: 'skyblue',
        fill: false,
      },
      {
        label: 'Higher Critical Limit',
        data: [350, 350, 350, 350, 350, 350], // Example critical limit values
        borderColor: 'purple',
        borderDash: [5, 5],
        fill: false,
      },
      {
        label: 'Lower Critical Limit',
        data: [220, 220, 220, 220, 220, 220], // Example critical limit values
        borderColor: 'pink',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (s)',
        },
      },
      y: {
        min: 210, // Adjust based on your data range
        max: 240, // Adjust based on your data range
        title: {
          display: true,
          text: 'Voltage (V)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          pointRadius: 10,
        },
      },
      title: {
        display: true,
        text: 'Voltage Over Time',
      },
    },
  };

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return <div className="h-72 w-full"><Line data={chartData} options={options} /></div>;
};

export default VoltageChart;
