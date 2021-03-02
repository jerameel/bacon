import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList, MainTabParamList } from 'types/Route';

export interface SettingsRouterProps {}

type SettingsRouteProp = RouteProp<MainStackParamList, 'MAIN'>;

type SettingsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'SETTINGS'>,
  StackNavigationProp<MainStackParamList, 'MAIN'>
>;

export interface SettingsProps {
  route: SettingsRouteProp;
  navigation: SettingsNavigationProp;
}
