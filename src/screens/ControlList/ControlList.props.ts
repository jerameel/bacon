import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ControlListStackParamList, TabParamList } from 'types/Route';
import { Control } from 'store/controls';

export interface ControlListRouterProps {}

type ControlListRouteProp = RouteProp<
  ControlListStackParamList,
  'CONTROL_LIST'
>;

type ControlListNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'CONTROL_LIST'>,
  StackNavigationProp<ControlListStackParamList, 'CONTROL_LIST'>
>;

export interface ControlListPublicProps {
  route: ControlListRouteProp;
  navigation: ControlListNavigationProp;
}

export interface ControlListGeneratedProps {
  addController: () => void;
  controllers: Control[];
}

export interface ControlListProps
  extends ControlListPublicProps,
    ControlListGeneratedProps {}
