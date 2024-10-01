// lib/atoms.js
import { atom } from 'recoil';

export const voltageVisibilityState = atom({
  key: 'voltageVisibilityState',
  default: {
    v1: true,
    v2: true,
    v3: true,
  },
});
