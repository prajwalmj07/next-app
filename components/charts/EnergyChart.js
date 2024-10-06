import React from 'react';
import GenericChart from '../GenericChart';

const EnergyChart = ({ selectedMeter, chartType }) => {
  // Dummy data - replace with actual data fetched from backend
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Energy',
        data: [300, 320, 310, 330, 325],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Energy for Meter ${selectedMeter}`,
      },
    },
  };

  return <GenericChart chartType={chartType} data={data} options={options} />;
};

export default EnergyChart;
