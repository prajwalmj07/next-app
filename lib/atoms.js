// lib/atoms.js
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
    energy: { show: true, chartType: 'bar' },
  },
});

export const fullScreenCardState = atom({
  key: 'fullScreenCardState',
  default: null,
});