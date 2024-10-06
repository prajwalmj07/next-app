import React from 'react';

const Dropdown = ({ chartType, onChangeChartType, className }) => {
  return (
    <select
      value={chartType}
      onChange={(e) => onChangeChartType(e.target.value)}
      className={`border border-gray-300 rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    >
      <option value="line">Line</option>
      <option value="bar">Bar</option>
      <option value="pie">Pie</option>
      <option value="doughnut">Doughnut</option>
    </select>
  );
};

export default Dropdown;
