// DeviceInfo.js
import React from 'react';
import { motion } from 'framer-motion';
import useFetchDeviceInfo from '../hooks/useFetchDeviceInfo';
import { useEnergyMeterStates } from '../hooks/useEnergyMeterStates';

const DeviceInfo = () => {
  const { selectedMeter } = useEnergyMeterStates();
  const { data: deviceData, loading, error } = useFetchDeviceInfo(selectedMeter);

  // Map meter IDs to their names
  const meterNames = {
    'WR2001000008': 'Energy Meter 1',
    'WR2009000663': 'Energy Meter 2',
    'WR2109000129': 'Energy Meter 3',
    'WR2109000128': 'Energy Meter 4',
    'WR2109000127': 'Energy Meter 6',
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg p-6"
      >
        <h3 className="font-bold text-gray-800 text-xl mb-4">Device Information</h3>
        <p className="text-gray-600">Loading device information...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg p-6"
      >
        <h3 className="font-bold text-gray-800 text-xl mb-4">Device Information</h3>
        <p className="text-red-600">Error loading device information: {error}</p>
      </motion.div>
    );
  }

  if (!deviceData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg p-6"
      >
        <h3 className="font-bold text-gray-800 text-xl mb-4">Device Information</h3>
        <p className="text-gray-600">No device selected.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-lg p-6"
    >
      <h3 className="font-bold text-gray-800 text-xl mb-6">Device Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InfoItem 
          title="Selected Meter" 
          value={meterNames[selectedMeter] || selectedMeter} 
          className="text-blue-600 font-semibold"
        />
        <InfoItem title="Serial Number" value={deviceData.serialNumber} />
        <InfoItem title="MAC Address" value={deviceData.macAddress} />
        <InfoItem title="Version" value={deviceData.version} />
        <InfoItem 
          title="Status" 
          value={deviceData.status} 
          className={deviceData.status === 'normal' ? 'text-green-600' : 'text-red-600'}
        />
      </div>
    </motion.div>
  );
};

const InfoItem = ({ title, value, className = '' }) => (
  <div>
    <h4 className="font-semibold text-gray-700 mb-1">{title}</h4>
    <p className={`text-gray-800 ${className}`}>{value || 'N/A'}</p>
  </div>
);

export default DeviceInfo;