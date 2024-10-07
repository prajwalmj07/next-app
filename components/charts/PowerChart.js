import React from 'react';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, TimeScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import GenericChart from '../GenericChart';
import useFetchEnergyData from '../../hooks/useFetchEnergyData';

// Register the required components
ChartJS.register(LineElement, CategoryScale, LinearScale, TimeScale, Title, Tooltip, Legend);

const PowerChart = ({ selectedMeter, chartType }) => {
  const { data, loading, error } = useFetchEnergyData(selectedMeter, 'power');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const chartData = {
    labels: data.time.map((time, index) => `${data.date[index]} ${time}`),
    datasets: [
      {
        label: 'Power L1',
        data: data.KW_L1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Power L2',
        data: data.KW_L2,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Power L3',
        data: data.KW_L3,
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
        text: `Power for Meter ${selectedMeter}`,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          displayFormats: {
            minute: 'HH:mm',
          },
        },
        title: {
          display: true,
          text: 'Time',
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
