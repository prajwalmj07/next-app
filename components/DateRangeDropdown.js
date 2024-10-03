// components/DateRangeDropdown.js
import React from 'react';

const DateRangeDropdown = () => {
  return (
    <select className="border border-gray-300 rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      {['Today', 'Last Week', 'Last Month', 'Custom Dates'].map((range) => (
        <option key={range} value={range}>
          {range}
        </option>
      ))}
    </select>
  );
};

export default DateRangeDropdown;
