import React from 'react';
import { motion } from 'framer-motion';
import useFetchDeviceInfo from '@/hooks/useFetchDeviceInfo';
import { useEnergyMeterStates } from '@/hooks/useEnergyMeterStates';


const DeviceInfo = () => {
  const { selectedMeter } = useEnergyMeterStates();
  const { data: deviceData, loading, error } = useFetchDeviceInfo(selectedMeter);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-600 text-center">Error: {error}</div>;
  if (!deviceData) return <div className="text-center">No device selected.</div>;

  const infoItems = [
    { label: 'Serial Number', value: deviceData.serialNumber },
    { label: 'MAC Address', value: deviceData.macAddress },
    { label: 'Version', value: deviceData.version },
    { label: 'Status', value: deviceData.status, className: deviceData.status === 'normal' ? 'text-green-600' : 'text-red-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-lg p-4"
    >
      <h3 className="font-bold text-gray-800 text-lg mb-2">Device Information</h3>
      <div className="grid grid-cols-4 gap-2 text-sm">
        {infoItems.map((item, index) => (
          <div key={index}>
            <div className="font-semibold text-gray-700">{item.label}</div>
            <div className={`text-gray-800 ${item.className || ''}`}>{item.value || 'N/A'}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DeviceInfo;