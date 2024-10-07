// FullScreenCard.js
import React from "react";
import { Minimize2 } from "lucide-react";
import Dropdown from './Dropdown';

const FullScreenCard = ({ title, children, onClose, chartType, onChangeChartType }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white p-8 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800 text-2xl">{title}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-blue-500 focus:outline-none transition-colors duration-300"
          aria-label="Close full screen"
        >
          <Minimize2 size={28} />
        </button>
      </div>
      <Dropdown
        className="mb-6 w-48"
        chartType={chartType}
        onChangeChartType={onChangeChartType}
      />
      <div className="flex-grow flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-w-[90vw] max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullScreenCard;
