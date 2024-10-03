// components/Card.js
import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 h-80 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
      <h3 className="font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="flex h-full justify-center items-center bg-gray-50 rounded-md">
        {children ? children : <span className="text-gray-400">Graph Placeholder</span>}
      </div>
    </div>
  );
};
export default Card;
