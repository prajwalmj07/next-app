import React from 'react';
import VoltageChart from './charts/VoltageChart';
import CurrentChart from './charts/CurrentChart';
import EnergyChart from './charts/PowerChart';

const ChartContainer = ({ selectedMeter, chartTypes }) => {
  const chartData = {
    voltage: {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'Voltage',
          data: [220, 230, 225, 228, 232],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
      ],
    },
    current: {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'Current',
          data: [15, 18, 16, 17, 19],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    energy: {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'Energy',
          data: [300, 320, 310, 330, 325],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
      ],
    },
  };

  const renderChart = (type) => {
    switch (type) {
      case 'voltage':
        return <VoltageChart selectedMeter={selectedMeter} chartType={type} data={chartData.voltage} />;
      case 'current':
        return <CurrentChart selectedMeter={selectedMeter} chartType={type} data={chartData.current} />;
      case 'energy':
        return <EnergyChart selectedMeter={selectedMeter} chartType={type} data={chartData.energy} />;
      default:
        return null;  // Make sure to handle this case to avoid returning undefined
    }
  };

  return (
    <div className="flex flex-col h-full">
      {chartTypes.map((type, index) => (
        <div key={index} className="flex-1">
          {renderChart(type)}
        </div>
      ))}
    </div>
  );
};

export default ChartContainer;
