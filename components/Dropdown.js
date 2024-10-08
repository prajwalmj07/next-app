import React from 'react';
import { motion } from 'framer-motion';

const Dropdown = ({ chartType, onChangeChartType, className }) => {
  return (
    <motion.select
      value={chartType}
      onChange={(e) => onChangeChartType(e.target.value)}
      className={`border-2 border-gray-300 rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <option value="line">Line Chart</option>
      <option value="bar">Bar Chart</option>
      <option value="pie">Pie Chart</option>
      <option value="doughnut">Doughnut Chart</option>
      <option value="area">Area Chart</option>
    </motion.select>
  );
};

export default Dropdown;
