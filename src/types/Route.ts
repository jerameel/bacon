import { ControlEditRouterProps } from 'screens/ControlEdit/ControlEdit.props';
import { ControlListRouterProps } from 'screens/ControlList/ControlList.props';
import { HomeRouterProps } from 'screens/Home/Home.props';
import { SettingsRouterProps } from 'screens/Settings/Settings.props';

export type MainTabParamList = {
  HOME: HomeRouterProps;
  CONTROL_LIST: ControlListRouterProps;
  // SETTINGS: SettingsRouterProps;
};

export type MainStackParamList = {
  MAIN: MainTabParamList;
  CONTROL_EDIT: ControlEditRouterProps;
};
