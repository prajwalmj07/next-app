import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';
import FacilityDropdown from './FacilityDropdown';
import DateRangeDropdown from './DateRangeDropdown';
import EnergyMeterSidebar from './EnergyMeterSidebar';
import GraphLayout from './GraphLayout';
import DeviceInfo from './DeviceInfo';

const Dashboard = () => {
  const [selectedMeter, setSelectedMeter] = useState('WR2009000663');
  const [fullScreenCard, setFullScreenCard] = useState(null);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {!fullScreenCard && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 md:min-h-screen border-r border-gray-200"
        >
          <EnergyMeterSidebar onSelectMeter={setSelectedMeter} selectedMeter={selectedMeter} />
        </motion.div>
      )}
      <div className={`flex flex-col w-full ${fullScreenCard ? '' : 'md:w-3/4 lg:w-4/5 xl:w-5/6'} min-h-screen p-4`}>
        {!fullScreenCard && (
          <motion.div 
            className="flex justify-between mb-4 sticky top-0 bg-white z-10 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FacilityDropdown />
            <DateRangeDropdown />
          </motion.div>
        )}
        <motion.div
          className="flex-grow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GraphLayout 
            selectedMeter={selectedMeter} 
            fullScreenCard={fullScreenCard}
            setFullScreenCard={setFullScreenCard}
          />
        </motion.div>
        {!fullScreenCard && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <DeviceInfo />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;