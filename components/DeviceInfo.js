// DeviceInfo.js
import React from 'react';
import { motion } from 'framer-motion';

const DeviceInfo = ({ deviceData }) => {
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
        <InfoItem title="Device Name" value={deviceData.name} />
        <InfoItem title="Device ID" value={deviceData.id} />
        <InfoItem 
          title="Status" 
          value={deviceData.status} 
          className={deviceData.status === 'active' ? 'text-green-600' : 'text-red-600'}
        />
        <InfoItem title="Last Active" value={deviceData.lastActive} />
        <InfoItem title="Location" value={deviceData.location} />
        <InfoItem title="Energy Consumption" value={`${deviceData.energyConsumption} kWh`} />
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
