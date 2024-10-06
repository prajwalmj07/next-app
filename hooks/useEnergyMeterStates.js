// hooks/useEnergyMeterStates.js
import { useRecoilState } from 'recoil';
import { selectedMeterState, graphConfigState, fullScreenCardState } from '../lib/atoms';

export function useEnergyMeterStates() {
  const [selectedMeter, setSelectedMeter] = useRecoilState(selectedMeterState);
  const [graphConfig, setGraphConfig] = useRecoilState(graphConfigState);
  const [fullScreenCard, setFullScreenCard] = useRecoilState(fullScreenCardState);

  return {
    selectedMeter,
    setSelectedMeter,
    graphConfig,
    setGraphConfig,
    fullScreenCard,
    setFullScreenCard
  };
}