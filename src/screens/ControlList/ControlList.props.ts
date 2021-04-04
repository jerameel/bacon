import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList, MainTabParamList } from 'types/Route';
import { Control } from 'store/controls';

export interface ControlListRouterProps {}

type ControlListRouteProp = RouteProp<MainStackParamList, 'MAIN'>;

type ControlListNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'CONTROL_LIST'>,
  StackNavigationProp<MainStackParamList, 'MAIN'>
>;

export interface ControlListPublicProps {
  route: ControlListRouteProp;
  navigation: ControlListNavigationProp;
}

export interface ControlListGeneratedProps {
  controllers: Control[];
}

export interface ControlListProps
  extends ControlListPublicProps,
    ControlListGeneratedProps {}
