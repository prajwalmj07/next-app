import { atom } from 'recoil';

export const selectedMeterState = atom({
  key: 'selectedMeterState',
  default: 'WR2009000663',
});

export const graphConfigState = atom({
  key: 'graphConfigState',
  default: {
    voltage: { show: true, chartType: 'line' },
    current: { show: true, chartType: 'line' },
    power: { show: true, chartType: 'bar' },  // Changed from 'energy' to 'power'
  },
});

export const fullScreenCardState = atom({
  key: 'fullScreenCardState',
  default: null,
});