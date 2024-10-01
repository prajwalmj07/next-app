import FacilityDropdown from './FacilityDropdown';
import DateRangeDropdown from './DateRangeDropdown';
import EnergyMeterSidebar from './EnergyMeterSidebar';
import GraphLayout from './GraphLayout';
import DeviceInfo from './DeviceInfo';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full p-4">
      <EnergyMeterSidebar />
      <div className="flex flex-col w-full md:pl-4">
        <div className="flex justify-between mb-4">
          <FacilityDropdown />
          <DateRangeDropdown />
        </div>
        <GraphLayout />
        <GraphLayout />
        <DeviceInfo />
      </div>
    </div>
  );
};

export default Dashboard;
