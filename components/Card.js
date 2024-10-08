// Card.js
import React from "react";
import { Maximize2 } from "lucide-react";
import Dropdown from "./Dropdown";

const Card = ({ title, onFullScreen, onChangeChartType, chartType, children }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg relative p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
        <button
          onClick={onFullScreen}
          className="text-gray-500 hover:text-blue-500 focus:outline-none transition-colors duration-300"
          aria-label="Full Screen"
        >
          <Maximize2 size={24} />
        </button>
      </div>
      <Dropdown
        className="mb-4 w-full"
        chartType={chartType}
        onChangeChartType={onChangeChartType}
      />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full h-[300px]"> {/* Fixed height for better control */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;