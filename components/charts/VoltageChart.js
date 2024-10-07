import React from 'react';
import GenericChart from '../GenericChart';
import useFetchEnergyData from '../../hooks/useFetchEnergyData';

const VoltageChart = ({ selectedMeter, chartType }) => {
  const { data, loading, error } = useFetchEnergyData(selectedMeter, 'voltage');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const chartData = {
    labels: data.time.map((time) => time),
    datasets: [
      {
        label: 'V1',
        data: data.voltage1,
        borderColor: 'rgba(34, 202, 236, 1)',  // Light Cyan
        backgroundColor: 'rgba(34, 202, 236, 0.5)',
      },
      {
        label: 'V2',
        data: data.voltage2,
        borderColor: 'rgba(75, 192, 192, 1)',  // Light Teal
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'V3',
        data: data.voltage3,
        borderColor: 'rgba(255, 159, 64, 1)',  // Light Orange
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Voltage`,
        font: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Voltage (V)',
        },
      },
    },
  };

  return <GenericChart chartType={chartType} data={chartData} options={options} />;
};

export default VoltageChart;
