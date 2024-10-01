import React from 'react';

const DeviceInfo = () => {
  return (
    <div className="flex justify-between bg-gray-200 p-4 rounded-md mt-4">
      <div>
        <h4 className="font-semibold">Device Information</h4>
        <div className="flex justify-between">
          <span>Device Name: Energy-Meter-02</span>
          <span>Model Name: WR222-WLAN+LTE-E</span>
          <span>Status: Normal</span>
          <span>Serial Number: WR20090000663</span>
          <span>IP Address: 192.168.1.10</span>
          <span>MAC Address: 94:66:e7:00:57:c1</span>
          <span>Version: 1.5.5</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfo;
