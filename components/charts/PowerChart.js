// components/charts/PowerChart.js
import React from 'react';
import GenericChart from '../GenericChart';
import useFetchEnergyData from '../../hooks/useFetchEnergyData';
import { useRecoilValue } from 'recoil';
import { shouldFetchDataState } from '../../lib/atoms';

const PowerChart = ({ selectedMeter, chartType }) => {
  const shouldFetchData = useRecoilValue(shouldFetchDataState);
  const { data, loading, error } = useFetchEnergyData(selectedMeter, 'power', shouldFetchData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const chartData = {
    labels: data.time.map((time) => time),
    datasets: [
      {
        label: 'Power L1',
        data: data.KW_L1,
        borderColor: 'rgba(128, 0, 128, 1)',  // Purple
        backgroundColor: 'rgba(128, 0, 128, 0.3)',  // Light Purple
        fill: chartType === 'area',
      },
      {
        label: 'Power L2',
        data: data.KW_L2,
        borderColor: 'rgba(0, 128, 128, 1)',  // Teal
        backgroundColor: 'rgba(0, 128, 128, 0.3)',  // Light Teal
        fill: chartType === 'area',
      },
      {
        label: 'Power L3',
        data: data.KW_L3,
        borderColor: 'rgba(255, 69, 0, 1)',  // Red-Orange
        backgroundColor: 'rgba(255, 69, 0, 0.3)',  // Light Red-Orange
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
        text: `Power`,
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
          text: 'Power (KW)',
        },
      },
    },
  };

  return <GenericChart chartType={chartType} data={chartData} options={options} />;
};

export default PowerChart;
