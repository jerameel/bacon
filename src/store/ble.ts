import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  init: {
    status: 'IDLE',
  },
};

const bleSlice = createSlice({
  name: 'ble',
  initialState,
  reducers: {
    startBLE(state, action: PayloadAction<{}>) {
      return {
        ...state,
        init: {
          status: 'PENDING',
        },
      };
    },
    updateInitStatus(
      state,
      action: PayloadAction<{
        status: 'SUCCESS' | 'FAILED';
      }>,
    ) {
      return {
        ...state,
        init: {
          status: action.payload.status,
        },
      };
    },
  },
});

export const {
  startBLE: startBLEAction,
  updateInitStatus: updateInitStatusAction,
} = bleSlice.actions;

export default bleSlice.reducer;
