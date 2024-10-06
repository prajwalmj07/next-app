import React from 'react';
import Card from './Card';
import FullScreenCard from './FullScreenCard';
import VoltageChart from './charts/VoltageChart';
import CurrentChart from './charts/CurrentChart';
import EnergyChart from './charts/EnergyChart';
import { useEnergyMeterStates } from '../hooks/useEnergyMeterStates';

const GraphLayout = () => {
  const { selectedMeter, graphConfig, setGraphConfig, fullScreenCard, setFullScreenCard } = useEnergyMeterStates();

  const changeChartType = (metric, newType) => {
    setGraphConfig({
      ...graphConfig,
      [metric]: { ...graphConfig[metric], chartType: newType }
    });
  };

  const cards = [
    { 
      title: "Voltage", 
      metric: "voltage",
      component: <VoltageChart selectedMeter={selectedMeter} chartType={graphConfig.voltage.chartType} /> 
    },
    { 
      title: "Current", 
      metric: "current",
      component: <CurrentChart selectedMeter={selectedMeter} chartType={graphConfig.current.chartType} /> 
    },
    { 
      title: "Energy Consumption", 
      metric: "energy",
      component: <EnergyChart selectedMeter={selectedMeter} chartType={graphConfig.energy.chartType} /> 
    },
  ];

  if (fullScreenCard !== null) {
    const card = cards[fullScreenCard];
    return (
      <FullScreenCard
        title={card.title}
        onClose={() => setFullScreenCard(null)}
        chartType={graphConfig[card.metric].chartType}
        onChangeChartType={(newType) => changeChartType(card.metric, newType)}
      >
        {card.component}
      </FullScreenCard>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {cards.map((card, index) => (
        graphConfig[card.metric].show && (
          <Card 
            key={index}
            title={card.title}
            onFullScreen={() => setFullScreenCard(index)}
            chartType={graphConfig[card.metric].chartType}
            onChangeChartType={(newType) => changeChartType(card.metric, newType)}
          >
            {card.component}
          </Card>
        )
      ))}
    </div>
  );
};

export default GraphLayout;
