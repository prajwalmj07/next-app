// components/CurrentChart.js
'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const CurrentChart = () => {
  const [currentData, setCurrentData] = useState({ current1: [], current2: [], current3: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/current?data_per_page=6'); // API call to your backend
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched current data:', data); // Log the data to inspect

        // Update state with fetched current data
        setCurrentData({
          current1: data.current1.split(', ').map(Number), // Convert data to numbers
          current2: data.current2.split(', ').map(Number),
          current3: data.current3.split(', ').map(Number),
        });
      } catch (error) {
        console.error('Error fetching current data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentData();
  }, []); // Fetch current data once on component mount

  const labels = ['0s', '1s', '2s', '3s', '4s', '5s']; // X-axis labels

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'I1 Current',
        data: currentData.current1, // Use fetched I1 current data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'I2 Current',
        data: currentData.current2, // Use fetched I2 current data
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'I3 Current',
        data: currentData.current3, // Use fetched I3 current data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio for more control
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (s)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Current (A)', // Y-axis title
        },
        min: 0.5, // Minimum value for Y-axis
        max: 5, // Maximum value for Y-axis (adjust as needed)
        ticks: {
          stepSize: 0.5, // Set step size for Y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Current Over Time',
      },
    },
  };

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return <Line data={data} options={options} />;
};

export default CurrentChart;