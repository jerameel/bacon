import { v1 as uuidv1 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ControlElement = {
  id: string;
  x: string;
  y: string;
  label: string;
  event: {
    press: string;
    release: string;
  };
};

export type Control = {
  id: string;
  label: string;
  created_at: string;
  elements: ControlElement[];
};

const initialState: Control[] = [];

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    addController(state, action: PayloadAction<Partial<Control>>) {
      // state.push(action.payload);
      return [
        ...state,
        {
          id: uuidv1(),
          created_at: new Date().toISOString(),
          label: 'New Controller',
          elements: [],
          ...action.payload,
        },
      ];
    },
  },
});

export const { addController: addControllerAction } = controlsSlice.actions;

export default controlsSlice.reducer;
