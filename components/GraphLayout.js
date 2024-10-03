// components/GraphLayout.js
import React from 'react';
import Card from './Card';
import VoltageChart from './charts/VoltageChart';
import EnergyConsumptionChart from './charts/EnergyConsumptionChart';
import CurrentChart from './charts/CurrentChart';
import FullScreenCard from './FullScreenCard';

const GraphLayout = ({ selectedMeter, fullScreenCard, setFullScreenCard }) => {
  const cards = [
    { title: "Voltage Chart", component: <VoltageChart selectedMeter={selectedMeter} /> },
    { title: "Energy Consumption (Present)", component: <EnergyConsumptionChart selectedMeter={selectedMeter} /> },
    { title: "Current", component: <CurrentChart selectedMeter={selectedMeter} /> },
  ];

  if (fullScreenCard !== null) {
    return (
      <FullScreenCard
        title={cards[fullScreenCard].title}
        onClose={() => setFullScreenCard(null)}
      >
        {cards[fullScreenCard].component}
      </FullScreenCard>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {cards.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          onFullScreen={() => setFullScreenCard(index)}
        >
          {card.component}
        </Card>
      ))}
    </div>
  );
};

export default GraphLayout;
