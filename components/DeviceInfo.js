import React from 'react';
import { motion } from 'framer-motion';
import { useEnergyMeterStates } from '../hooks/useEnergyMeterStates';
import useFetchDeviceInfo from '@/hooks/useFetchDeviceInfo';

const DeviceInfo = () => {
  const { selectedMeter } = useEnergyMeterStates();
  const { data: deviceData, loading, error } = useFetchDeviceInfo(selectedMeter);

  // Map selected meter ID to its display name
  const meterNames = {
    'WR2001000008': 'ENERGY-METER-01',
    'WR2009000663': 'ENERGY-METER-02',
    'WR2109000129': 'ENERGY-METER-03',
    'WR2109000128': 'ENERGY-METER-04',
    'WR2109000127': 'ENERGY-METER-06',
  };

  const selectedMeterName = meterNames[selectedMeter] || 'No Meter Selected';

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
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-800 text-lg">Device Information</h3>
        <div className={`text-lg font-bold text-orange-600 mr-4`}>{selectedMeterName}</div> {/* Updated color and added margin */} 
      </div>
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
