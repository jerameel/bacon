import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsStackParamList, TabParamList } from 'types/Route';

export interface SettingsRouterProps {}

type SettingsRouteProp = RouteProp<SettingsStackParamList, 'SETTINGS'>;

type SettingsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'SETTINGS'>,
  StackNavigationProp<SettingsStackParamList, 'SETTINGS'>
>;

export interface SettingsProps {
  route: SettingsRouteProp;
  navigation: SettingsNavigationProp;
}
