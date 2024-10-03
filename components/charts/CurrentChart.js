'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const CurrentChart = ({ selectedMeter }) => {
  const [currentData, setCurrentData] = useState({ current1: [], current2: [], current3: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/${selectedMeter}/energymeterdata?data_per_page=11`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const current1 = data.map(record => record.energyMeterdata.current.I1);
        const current2 = data.map(record => record.energyMeterdata.current.I2);
        const current3 = data.map(record => record.energyMeterdata.current.I3);

        setCurrentData({
          current1: current1.map(Number),
          current2: current2.map(Number),
          current3: current3.map(Number),
        });
      } catch (error) {
        console.error('Error fetching current data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentData();
  }, [selectedMeter]); // Re-fetch data when selected meter changes

  const labels = ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s'];

  const data = {
    labels,
    datasets: [
      {
        label: 'I1 Current',
        data: currentData.current1,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'I2 Current',
        data: currentData.current2,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'I3 Current',
        data: currentData.current3,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: 'Time (s)' } },
      y: {
        title: { display: true, text: 'Current (A)' },
        min: 0,
        max: 15,
        ticks: { stepSize: 0.5 },
      },
    },
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Current Over Time' },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Line data={data} options={options} />;
};

export default CurrentChart;
