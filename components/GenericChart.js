// GenericChart.js
import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const GenericChart = ({ chartType, data, options }) => {
  const ChartComponent = {
    line: Line,
    bar: Bar,
    pie: Pie,
    doughnut: Doughnut
  }[chartType] || Line;

  // Adjust options for better responsiveness and visibility
  const responsiveOptions = {
    ...options,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      ...options.plugins,
      legend: {
        ...options.plugins?.legend,
        position: 'bottom',
        labels: {
          boxWidth: 10,
          padding: 10,
          font: {
            size: 10
          }
        }
      }
    }
  };

  // Additional adjustments for pie and doughnut charts
  if (chartType === 'pie' || chartType === 'doughnut') {
    responsiveOptions.plugins.legend.position = 'right';
    responsiveOptions.layout = {
      padding: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 0
      }
    };
  }

  return (
    <div className="w-full h-full">
      <ChartComponent data={data} options={responsiveOptions} />
    </div>
  );
};

export default GenericChart;