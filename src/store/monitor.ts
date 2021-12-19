import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bleActions } from './ble';

export type MonitorLogType = 'INCOMING' | 'OUTGOING' | 'ERROR' | 'INFO';
export type MonitorLog = {
  characteristicUUID?: string;
  serviceUUID?: string;
  message: string;
  createdAt?: string;
  type: MonitorLogType;
};

const initialState: MonitorLog[] = [];

const monitorSlice = createSlice({
  name: 'monitor',
  initialState,
  reducers: {
    addLog(state, action: PayloadAction<MonitorLog>) {
      return [
        ...state,
        {
          createdAt: new Date().toISOString(),
          ...action.payload,
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(bleActions.disconnected, (state, action) => {
      return [];
    });
  },
});

export const { addLog: addLogAction } = monitorSlice.actions;

export default monitorSlice.reducer;
