import { Minimize2 } from "lucide-react";
import Dropdown from './Dropdown';

const FullScreenCard = ({ title, children, onClose, chartType, onChangeChartType }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 text-xl">{title}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
          aria-label="Close full screen"
        >
          <Minimize2 size={24} />
        </button>
      </div>
      <Dropdown
        className="mb-4"
        chartType={chartType}
        onChangeChartType={onChangeChartType}
      />
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default FullScreenCard;
