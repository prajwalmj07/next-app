import React from 'react';

const energyMeters = ['Energy Meter 1', 'Energy Meter 2', 'Energy Meter 3'];

const EnergyMeterSidebar = () => {
  return (
    <div className="bg-gray-200 rounded-md p-4 w-full md:w-1/6 lg:w-1/8 xl:w-1/10 mb-4 md:mb-0">
      <h2 className="font-semibold mb-2">Energy Meters</h2>
      <ul>
        {energyMeters.map((meter) => (
          <li key={meter} className="py-1 border-b">
            {meter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyMeterSidebar;
