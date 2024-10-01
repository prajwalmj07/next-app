import React from 'react';

const facilities = ['Facility-1', 'Facility-2', 'Facility-3'];

const FacilityDropdown = () => {
  return (
    <select className="border rounded-md p-2 bg-white">
      {facilities.map((facility) => (
        <option key={facility} value={facility}>
          {facility}
        </option>
      ))}
    </select>
  );
};

export default FacilityDropdown;
