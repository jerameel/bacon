import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Device = {
  id: string;
  name: string;
  rssi: number;
};

type Status = 'IDLE' | 'SCANNING' | 'CONNECTING' | 'CONNECTED';

type BLEState = {
  init: {
    status: 'PENDING' | 'SUCCESS' | 'FAILED';
  };
  status: Status;
  devices: Device[];
  connection: {
    UUID?: string;
    characteristics?: any[];
    RSSI?: number;
    targetWrite?: {
      characteristicUUID?: string;
      serviceUUID?: string;
    };
  };
};

const initialState: BLEState = {
  init: {
    status: 'PENDING',
  },
  status: 'IDLE',
  devices: [],
  connection: {},
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
        rssi: number;
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
    updateStatus(state, action: PayloadAction<Status>) {
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
    connect(state, action: PayloadAction<string>) {
      return {
        ...state,
        status: 'CONNECTING',
        connection: {
          UUID: action.payload,
        },
      };
    },
    connected(
      state,
      action: PayloadAction<{
        UUID: string;
        characteristics: any[];
      }>,
    ) {
      return {
        ...state,
        status: 'CONNECTED',
        connection: {
          ...state.connection,
          ...action.payload,
        },
      };
    },
    updateRSSI(state, action: PayloadAction<number>) {
      return {
        ...state,
        connection: {
          ...state.connection,
          RSSI: action.payload,
        },
      };
    },
    disconnect(state, action: PayloadAction<string>) {
      return state;
    },
    disconnected(state) {
      return {
        ...state,
        status: 'IDLE',
        connection: {},
      };
    },
    sendMessage(state, action: PayloadAction<string>) {
      return state;
    },
    updateTargetWriteCharacteristic(state, action: PayloadAction<string>) {
      const writeCharacteristics = (
        state.connection.characteristics || []
      ).filter(
        (c: any) => c.properties.WriteWithoutResponse || c.properties.Write,
      );
      const { characteristic, service } =
        writeCharacteristics.find((c) => c.characteristic === action.payload) ||
        {};

      if (characteristic) {
        return {
          ...state,
          connection: {
            ...state.connection,
            targetWrite: {
              characteristicUUID: characteristic,
              serviceUUID: service,
            },
          },
        };
      }

      return state;
    },
  },
});

export const bleActions = bleSlice.actions;

export default bleSlice.reducer;
