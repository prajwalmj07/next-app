// components/GraphLayout.js
import React from 'react';
import Card from './Card';
import VoltageChart from './charts/VoltageChart';
import EnergyConsumptionChart from './charts/EnergyConsumptionChart';
import CurrentChart from './charts/CurrentChart';

const GraphLayout = ({ selectedMeter }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      <Card title="Voltage Chart">
        <VoltageChart selectedMeter={selectedMeter} />
      </Card>
      <Card title="Energy Consumption (Present)">
        <EnergyConsumptionChart selectedMeter={selectedMeter} />
      </Card>
      <Card title="Current">
        <CurrentChart selectedMeter={selectedMeter} />
      </Card>
      {/* Additional cards can be added here */}
    </div>
  );
};

export default GraphLayout;
