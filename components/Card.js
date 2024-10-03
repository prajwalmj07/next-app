// components/Card.js
import { Maximize2 } from 'lucide-react';
import React from 'react';

const Card = ({ title, children, onFullScreen }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-blue-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <button
          onClick={onFullScreen}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
          aria-label="Full screen"
        >
          <Maximize2 size={18} />
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
export default Card;
