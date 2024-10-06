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

  return <ChartComponent data={data} options={options} />;
};

export default GenericChart;