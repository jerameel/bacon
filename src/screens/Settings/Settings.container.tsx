import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { THEME_OPTION, updateThemeAction } from 'store/settings';
import { SettingsGeneratedProps, SettingsPublicProps } from './Settings.props';
import SettingsView from './Settings.view';

const SettingsScreen = (props: SettingsPublicProps) => {
  const dispatch = useDispatch();

  const selectTheme = (value: THEME_OPTION) => {
    dispatch(updateThemeAction(value));
  };

  const settings = useSelector((state: RootState) => state.settings);

  const generatedProps: SettingsGeneratedProps = {
    selectTheme,
    settings,
  };

  return <SettingsView {...props} {...generatedProps} />;
};

export default SettingsScreen;
