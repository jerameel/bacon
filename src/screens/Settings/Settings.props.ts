import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Settings, THEME_OPTION } from 'store/settings';
import { MainStackParamList, MainTabParamList } from 'types/Route';

export interface SettingsRouterProps {}

type SettingsRouteProp = RouteProp<MainStackParamList, 'MAIN'>;

type SettingsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'SETTINGS'>,
  StackNavigationProp<MainStackParamList, 'MAIN'>
>;

export interface SettingsPublicProps {
  route: SettingsRouteProp;
  navigation: SettingsNavigationProp;
}

export interface SettingsGeneratedProps {
  selectTheme: (value: THEME_OPTION) => void;
  settings: Settings;
}

export interface SettingsProps
  extends SettingsPublicProps,
    SettingsGeneratedProps {}
