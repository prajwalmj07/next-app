// components/FacilityDropdown.js
import React from 'react';

const FacilityDropdown = () => {
  return (
    <select className="border border-gray-300 rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      {['Facility-1', 'Facility-2', 'Facility-3'].map((facility) => (
        <option key={facility} value={facility}>
          {facility}
        </option>
      ))}
    </select>
  );
};

export default FacilityDropdown;
