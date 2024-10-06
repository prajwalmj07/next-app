import React from "react";
import { Maximize2 } from "lucide-react";
import Dropdown from "./Dropdown";

const Card = ({ title, onFullScreen, onChangeChartType, chartType, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg relative p-4 h-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
        <button
          onClick={onFullScreen}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
          aria-label="Full Screen"
        >
          <Maximize2 size={20} />
        </button>
      </div>
      <Dropdown
        className="mb-4"
        chartType={chartType}
        onChangeChartType={onChangeChartType}
      />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Card;
