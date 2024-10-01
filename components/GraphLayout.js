// components/GraphLayout.js
import React from 'react';
import Card from './Card';
import VoltageChart from './VoltageChart';
import EnergyConsumptionChart from './EnergyConsumptionChart';
import CurrentChart from './CurrentChart'; // Import the new chart

const GraphLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      <Card title="Graph 1">
        <VoltageChart />
      </Card>
      <Card title="Energy Consumption (Present)">
        <EnergyConsumptionChart />
      </Card>
      <Card title="Current"> {/* Updated title */}
        <CurrentChart /> {/* Render the area chart here */}
      </Card>
    </div>
  );
};

export default GraphLayout;
