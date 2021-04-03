import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Device = {
  id: string;
  name: string;
};

type BLEState = {
  init: {
    status: 'PENDING' | 'SUCCESS' | 'FAILED';
  };
  status: 'IDLE' | 'SCANNING';
  devices: Device[];
};

const initialState: BLEState = {
  init: {
    status: 'PENDING',
  },
  status: 'IDLE',
  devices: [],
};

const bleSlice = createSlice({
  name: 'ble',
  initialState,
  reducers: {
    start(state) {
      return {
        ...state,
        init: {
          status: 'PENDING',
        },
      };
    },
    scan(state) {
      return { ...state, devices: [] };
    },
    stopScan(state) {
      return state;
    },
    addDevice(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
      }>,
    ) {
      const newDevice = action.payload;
      const existingDevices = state.devices;
      const alreadyExists =
        existingDevices.findIndex((v) => v.id === newDevice.id) >= 0;
      return {
        ...state,
        devices: alreadyExists ? state.devices : [...state.devices, newDevice],
      };
    },
    updateScanStatus(state, action: PayloadAction<'SCANNING' | 'IDLE'>) {
      return {
        ...state,
        status: action.payload,
      };
    },
    updateInitStatus(state, action: PayloadAction<'SUCCESS' | 'FAILED'>) {
      return {
        ...state,
        init: {
          status: action.payload,
        },
      };
    },
  },
});

export const bleActions = bleSlice.actions;

export default bleSlice.reducer;
