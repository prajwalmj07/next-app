// components/CurrentChart.js
'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const CurrentChart = () => {
  const labels = ['0s', '1s', '2s', '3s', '4s', '5s']; // X-axis labels
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'i1_current',
        data: [10, 20, 15, 25, 30, 28], // Example data for i1_current
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Area fill color for i1_current
        fill: true,
      },
      {
        label: 'i2_current',
        data: [5, 15, 10, 20, 25, 22], // Example data for i2
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Area fill color for i2
        fill: true,
      },
      {
        label: 'i3_current',
        data: [0, 10, 5, 15, 20, 18], // Example data for i3
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area fill color for i3
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
          text: 'Current (A)', // Change unit according to your needs
        },
        min: 0, // Minimum value for Y-axis
        max: 50, // Maximum value for Y-axis (adjust as needed)
        ticks: {
          stepSize: 5, // Set step size for Y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Current',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CurrentChart;
