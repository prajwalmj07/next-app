import React from 'react';
import GenericChart from '../GenericChart';

const CurrentChart = ({ selectedMeter, chartType }) => {
  // Dummy data - replace with actual data fetched from backend
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Current',
        data: [15, 18, 16, 17, 19],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        text: `Current for Meter ${selectedMeter}`,
      },
    },
  };

  return <GenericChart chartType={chartType} data={data} options={options} />;
};

export default CurrentChart;