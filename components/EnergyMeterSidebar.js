// components/EnergyMeterSidebar.js
import { selectedMeterState } from '@/lib/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';


const EnergyMeterSidebar = () => {
  const [selectedMeter, setSelectedMeter] = useRecoilState(selectedMeterState);

  const energyMeters = [
    { id: 'WR2001000008', name: 'Energy Meter 1' },
    { id: "WR2009000663", name: 'Energy Meter 2' },
    { id: "WR2109000129", name: 'Energy Meter 3' },
    { id: 'WR2109000127', name: 'Energy Meter 6' },
  ];

  return (
    <div className="bg-white h-full">
      <h2 className="font-semibold mb-4 text-gray-800 text-xl px-4 py-2 border-b border-gray-200 sticky top-0 bg-white z-10">Energy Meters</h2>
      <ul>
        {energyMeters.map((meter) => (
          <li
            key={meter.id}
            className={`py-3 px-4 cursor-pointer transition-colors duration-300 ${
              selectedMeter === meter.id
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setSelectedMeter(meter.id)}
          >
            {meter.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyMeterSidebar;