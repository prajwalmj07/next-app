import React from 'react';

const dateRanges = ['Today', 'Last Week', 'Last Month', 'Custom Dates'];

const DateRangeDropdown = () => {
  return (
    <select className="border rounded-md p-2 bg-white">
      {dateRanges.map((range) => (
        <option key={range} value={range}>
          {range}
        </option>
      ))}
    </select>
  );
};

export default DateRangeDropdown;
