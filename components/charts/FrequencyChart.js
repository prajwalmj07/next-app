// components/charts/FrequencyChart.js
import React from 'react';
import GenericChart from '../GenericChart';
import useFetchEnergyData from '../../hooks/useFetchEnergyData';
import { useRecoilValue } from 'recoil';
import { shouldFetchDataState } from '../../lib/atoms';

const FrequencyChart = ({ selectedMeter, chartType }) => {
  const shouldFetchData = useRecoilValue(shouldFetchDataState);
  const { data, loading, error } = useFetchEnergyData(selectedMeter, 'frequency', shouldFetchData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const chartData = {
    labels: data.time.map((time) => time),
    datasets: [
      {
        label: 'Frequency (Hz)',
        data: data.Frequency,
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        fill: chartType === 'area',
      },
      {
        label: 'Total KVAR',
        data: data.Total_KVAR,
        borderColor: 'rgba(40, 167, 69, 1)',
        backgroundColor: 'rgba(40, 167, 69, 0.5)',
        fill: chartType === 'area',
      },
      {
        label: 'Total KVA',
        data: data.Total_KVA,
        borderColor: 'rgba(255, 193, 7, 1)',
        backgroundColor: 'rgba(255, 193, 7, 0.5)',
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
        text: `Frequency and Power`,
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
          text: 'Frequency (Hz) / Power (KVAR, KVA)',
        },
      },
    },
  };

  return <GenericChart chartType={chartType} data={chartData} options={options} />;
};

export default FrequencyChart;
