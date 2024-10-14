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
    power: { show: true, chartType: 'bar' },
  },
});

export const fullScreenCardState = atom({
  key: 'fullScreenCardState',
  default: null,
});

export const dataPerPageState = atom({
  key: 'dataPerPageState',
  default: 15,
});

export const shouldFetchDataState = atom({
  key: 'shouldFetchDataState',
  default: false,
});