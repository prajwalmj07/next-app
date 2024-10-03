import React from 'react';

const energyMeters = [
  { id: 'WR2009000663', name: 'Energy Meter 1' },
  { id: 'WR2009000664', name: 'Energy Meter 2' },
  { id: 'WR2109000129', name: 'Energy Meter 3' },
];

const EnergyMeterSidebar = ({ onSelectMeter }) => {
  return (
    <div className="bg-gray-200 rounded-md p-4 w-full md:w-1/6 lg:w-1/8 xl:w-1/10 mb-4 md:mb-0">
      <h2 className="font-semibold mb-2">Energy Meters</h2>
      <ul>
        {energyMeters.map((meter) => (
          <li
            key={meter.id}
            className="py-1 border-b cursor-pointer hover:bg-gray-300"
            onClick={() => onSelectMeter(meter.id)}
          >
            {meter.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyMeterSidebar;
