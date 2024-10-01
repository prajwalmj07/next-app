// components/EnergyConsumptionChart.js
'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const EnergyConsumptionChart = () => {
  const data = {
    labels: ['Energy A', 'Energy B'], // Adjust the labels
    datasets: [{
      label: 'Energy Consumption (Present)',
      data: [300, 100], // Adjusted to 2 colors
      backgroundColor: [
        'rgb(255, 99, 132)', // Color for Energy A
        'rgb(54, 162, 235)', // Color for Energy B
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Energy Consumption (Present)',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default EnergyConsumptionChart;
