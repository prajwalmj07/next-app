// components/VoltageChart.js
'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const VoltageChart = () => {
  const labels = ['0s', '1s', '2s', '3s', '4s', '5s'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'V1',
        data: [10, 20, 15, 25, 30, 28],
        borderColor: 'orange',
        fill: false, // No fill under the line
      },
      {
        label: 'V2',
        data: [5, 15, 10, 20, 25, 22],
        borderColor: 'blue',
        fill: false, // No fill under the line
      },
      {
        label: 'V3',
        data: [0, 10, 5, 15, 20, 18],
        borderColor: 'skyblue',
        fill: false, // No fill under the line
      },
      {
        label: 'Higher Critical Limit',
        data: [35, 35, 35, 35, 35, 35], // Adjusted to avoid overlap
        borderColor: 'purple',
        borderDash: [5, 5],
        fill: false, // No fill under the line
      },
      {
        label: 'Lower Critical Limit',
        data: [0, 0, 0, 0, 0, 0],
        borderColor: 'pink',
        borderDash: [5, 5],
        fill: false, // No fill under the line
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
        min: -5, // Adjusted Y-axis to avoid overlapping
        max: 40, // Added more headroom to the Y-axis
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
          usePointStyle: true, // Use point style for the legend
          pointStyle: 'circle', // Set the point style to circle
          pointRadius: 10, // Adjust the radius of the circular legend items
        },
      },
      title: {
        display: true,
        text: 'Voltage Over Time',
      },
    },
  };

  return <div className="h-72 w-full"><Line data={data} options={options} /></div>; // Adjusted height
};

export default VoltageChart;
