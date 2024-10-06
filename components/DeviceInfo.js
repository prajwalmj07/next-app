import React from 'react';

const DeviceInfo = ({ deviceData }) => {
  if (!deviceData) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">Device Information</h3>
        <p className="text-gray-600">No device selected.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="font-semibold text-gray-800 text-lg mb-4">Device Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-700">Device Name</h4>
          <p className="text-gray-600">{deviceData.name || 'N/A'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Device ID</h4>
          <p className="text-gray-600">{deviceData.id || 'N/A'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Status</h4>
          <p className={`font-semibold ${deviceData.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
            {deviceData.status || 'N/A'}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Last Active</h4>
          <p className="text-gray-600">{deviceData.lastActive || 'N/A'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Location</h4>
          <p className="text-gray-600">{deviceData.location || 'N/A'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Energy Consumption</h4>
          <p className="text-gray-600">{deviceData.energyConsumption || 'N/A'} kWh</p>
        </div>
        {/* Add more fields as required */}
      </div>
    </div>
  );
};

export default DeviceInfo;
