import { ControlListRouterProps } from 'screens/ControlList/ControlList.props';
import { HomeRouterProps } from 'screens/Home/Home.props';
import { SettingsRouterProps } from 'screens/Settings/Settings.props';

export type HomeStackParamList = {
  HOME: HomeRouterProps;
};

export type ControlListStackParamList = {
  CONTROL_LIST: ControlListRouterProps;
};

export type SettingsStackParamList = {
  SETTINGS: SettingsRouterProps;
};

export type TabParamList = {
  HOME: HomeRouterProps;
  CONTROL_LIST: ControlListRouterProps;
  SETTINGS: SettingsRouterProps;
};
