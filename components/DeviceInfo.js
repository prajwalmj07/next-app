// components/DeviceInfo.js
import React from 'react';

const DeviceInfo = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h4 className="font-semibold text-xl text-gray-800 mb-4">Device Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
        <span>Device Name: Energy-Meter-02</span>
        <span>Model Name: WR222-WLAN+LTE-E</span>
        <span>Status: Normal</span>
        <span>Serial Number: WR20090000663</span>
        <span>IP Address: 192.168.1.10</span>
        <span>MAC Address: 94:66:e7:00:57:c1</span>
        <span>Version: 1.5.5</span>
      </div>
    </div>
  );
};
export default DeviceInfo;
