import { useState } from 'react';
import FacilityDropdown from './FacilityDropdown';
import DateRangeDropdown from './DateRangeDropdown';
import EnergyMeterSidebar from './EnergyMeterSidebar';
import GraphLayout from './GraphLayout';
import DeviceInfo from './DeviceInfo';

const Dashboard = () => {
  const [selectedMeter, setSelectedMeter] = useState('WR2009000663'); // Default to Energy Meter 1

  return (
    <div className="flex flex-col md:flex-row w-full h-full p-4">
      <EnergyMeterSidebar onSelectMeter={setSelectedMeter} />
      <div className="flex flex-col w-full md:pl-4">
        <div className="flex justify-between mb-4">
          <FacilityDropdown />
          <DateRangeDropdown />
        </div>
        <GraphLayout selectedMeter={selectedMeter} />
        <DeviceInfo />
      </div>
    </div>
  );
};

export default Dashboard;
