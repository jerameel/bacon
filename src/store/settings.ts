import { Appearance } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type THEME_OPTION = 'Light' | 'Dark';

export type Settings = {
  selectedTheme: THEME_OPTION;
};

const initialState: Settings = {
  selectedTheme: Appearance.getColorScheme() === 'dark' ? 'Dark' : 'Light',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateTheme(state, action: PayloadAction<THEME_OPTION>) {
      return { ...state, selectedTheme: action.payload };
    },
  },
});

export const { updateTheme: updateThemeAction } = settingsSlice.actions;

export default settingsSlice.reducer;
