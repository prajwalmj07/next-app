import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import FullScreenCard from './FullScreenCard';
import VoltageChart from './charts/VoltageChart';
import CurrentChart from './charts/CurrentChart';
import PowerChart from './charts/PowerChart';
import { useEnergyMeterStates } from '../hooks/useEnergyMeterStates';

const GraphLayout = () => {
  const { selectedMeter, graphConfig, setGraphConfig, fullScreenCard, setFullScreenCard } = useEnergyMeterStates();

  const changeChartType = (metric, newType) => {
    setGraphConfig({
      ...graphConfig,
      [metric]: { ...graphConfig[metric], chartType: newType }
    });
  };

  const getChartType = (metric) => {
    return graphConfig[metric]?.chartType || 'line';
  };

  const cards = [
    { 
      title: "Voltage", 
      metric: "voltage",
      component: (chartType) => <VoltageChart selectedMeter={selectedMeter} chartType={chartType} /> 
    },
    { 
      title: "Current", 
      metric: "current",
      component: (chartType) => <CurrentChart selectedMeter={selectedMeter} chartType={chartType} /> 
    },
    { 
      title: "Power", 
      metric: "power",
      component: (chartType) => <PowerChart selectedMeter={selectedMeter} chartType={chartType} /> 
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <AnimatePresence>
          {cards.map((card, index) => (
            graphConfig[card.metric]?.show && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  title={card.title}
                  onFullScreen={() => setFullScreenCard(index)}
                  chartType={getChartType(card.metric)}
                  onChangeChartType={(newType) => changeChartType(card.metric, newType)}
                >
                  {card.component(getChartType(card.metric))}
                </Card>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      {fullScreenCard !== null && (
        <FullScreenCard
          title={cards[fullScreenCard].title}
          onClose={() => setFullScreenCard(null)}
          chartType={getChartType(cards[fullScreenCard].metric)}
          onChangeChartType={(newType) => changeChartType(cards[fullScreenCard].metric, newType)}
        >
          {cards[fullScreenCard].component(getChartType(cards[fullScreenCard].metric))}
        </FullScreenCard>
      )}
    </>
  );
};

export default GraphLayout;