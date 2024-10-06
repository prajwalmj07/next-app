import React from 'react';
import GenericChart from '../GenericChart';


const VoltageChart = ({ selectedMeter, chartType }) => {
  // Dummy data - replace with actual data fetched from backend
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Voltage',
        data: [220, 230, 225, 228, 232],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
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
        text: `Voltage for Meter ${selectedMeter}`,
      },
    },
  };

  return <GenericChart chartType={chartType} data={data} options={options} />;
};

export default VoltageChart; 