import React from 'react';
import GenericChart from '../GenericChart';
import useFetchEnergyData from '../../hooks/useFetchEnergyData';

const PowerChart = ({ selectedMeter, chartType }) => {
  const { data, loading, error } = useFetchEnergyData(selectedMeter, 'power');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const chartData = {
    labels: data.time.map((time) => time),
    datasets: [
      {
        label: 'Power L1',
        data: data.KW_L1,
        borderColor: 'rgba(255, 99, 132, 1)',  // Light Red
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: chartType === 'area',  // Fill only for area chart
      },
      {
        label: 'Power L2',
        data: data.KW_L2,
        borderColor: 'rgba(75, 192, 192, 1)',  // Light Teal
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: chartType === 'area',
      },
      {
        label: 'Power L3',
        data: data.KW_L3,
        borderColor: 'rgba(255, 206, 86, 1)',  // Light Yellow
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        fill: chartType === 'area',
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
        text: `Power for Meter ${selectedMeter}`,
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
          text: 'Power (kW)',
        },
      },
    },
  };

  return <GenericChart chartType={chartType} data={chartData} options={options} />;
};

export default PowerChart;
