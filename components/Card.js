// components/Card.js
import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow rounded-md p-4 h-80"> {/* Adjust height as needed */}
      <h3 className="font-semibold mb-2">{title}</h3>
      {/* Graph content will be rendered here */}
      <div className="flex h-full justify-center items-center bg-gray-100 rounded-md">
        {children ? children : <span className="text-gray-500">Graph Placeholder</span>}
      </div>
    </div>
  );
};

export default Card;
