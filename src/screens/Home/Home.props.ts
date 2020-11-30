import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList, TabParamList } from 'types/Route';

export interface HomeRouterProps {}

type HomeRouteProp = RouteProp<HomeStackParamList, 'HOME'>;

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'HOME'>,
  StackNavigationProp<HomeStackParamList, 'HOME'>
>;

export interface HomeProps {
  route: HomeRouteProp;
  navigation: HomeNavigationProp;
}
