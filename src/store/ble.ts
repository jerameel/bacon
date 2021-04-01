import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
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
      return state;
    },
    stopScan(state) {
      return state;
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
