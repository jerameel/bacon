import { v1 as uuidv1 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ControlElement = {
  id: string;
  x: number;
  y: number;
  label: string;
  size: number;
  command: {
    onPress: string;
    onRelease: string;
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
      return [
        ...state,
        {
          id: uuidv1(),
          created_at: new Date().toISOString(),
          label: '',
          elements: [],
          ...action.payload,
        },
      ];
    },
    updateController(state, action: PayloadAction<Partial<Control>>) {
      const index = state.findIndex(
        (controller) => controller.id === action.payload.id,
      );

      // Note: Immer Mutation
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }

      return state;
    },
    deleteController(state, action: PayloadAction<{ id: string }>) {
      const index = state.findIndex(
        (controller) => controller.id === action.payload.id,
      );

      // Note: Immer Mutation
      if (index !== -1) {
        state.splice(index, 1);
      }

      return state;
    },
  },
});

export const {
  addController: addControllerAction,
  updateController: updateControllerAction,
  deleteController: deleteControllerAction,
} = controlsSlice.actions;

export default controlsSlice.reducer;
