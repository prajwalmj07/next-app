import React from 'react';
import GenericChart from '../GenericChart';
import useFetchEnergyData from '../../hooks/useFetchEnergyData';

const CurrentChart = ({ selectedMeter, chartType }) => {
  const { data, loading, error } = useFetchEnergyData(selectedMeter, 'current');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const chartData = {
    labels: data.time.map((time) => time),
    datasets: [
      {
        label: 'Current 1',
        data: data.current1,
        borderColor: 'rgba(54, 162, 235, 1)',  // Light Blue
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: chartType === 'area',  // Fill only for area chart
      },
      {
        label: 'Current 2',
        data: data.current2,
        borderColor: 'rgba(153, 102, 255, 1)',  // Light Purple
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        fill: chartType === 'area',
      },
      {
        label: 'Current 3',
        data: data.current3,
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
        text: `Current for Meter ${selectedMeter}`,
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
          text: 'Current (A)',
        },
      },
    },
  };

  return <GenericChart chartType={chartType} data={chartData} options={options} />;
};

export default CurrentChart;
