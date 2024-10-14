// components/ChartTypeSelector.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ChartTypeSelector = ({ chartType, onChangeChartType }) => {
  const chartTypes = ['line', 'bar', 'pie', 'doughnut'];
  
  const handleChartTypeChange = (direction) => {
    const currentIndex = chartTypes.indexOf(chartType);
    let newIndex;
    if (direction === 'left') {
      newIndex = (currentIndex - 1 + chartTypes.length) % chartTypes.length;
    } else {
      newIndex = (currentIndex + 1) % chartTypes.length;
    }
    onChangeChartType(chartTypes[newIndex]);
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => handleChartTypeChange('left')} className="p-1">
        <ChevronLeft size={20} />
      </button>
      <span className="text-sm font-medium">{chartType.charAt(0).toUpperCase() + chartType.slice(1)}</span>
      <button onClick={() => handleChartTypeChange('right')} className="p-1">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ChartTypeSelector;