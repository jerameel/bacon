import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Control } from 'store/controls';
import { MainStackParamList } from 'types/Route';

export interface ConnectedControllerRouterProps {
  id?: string;
}

type ConnectedController = RouteProp<
  MainStackParamList,
  'CONNECTED_CONTROLLER'
>;

type ConnectedControllerNavigationProp = StackNavigationProp<
  MainStackParamList,
  'CONNECTED_CONTROLLER'
>;

export interface ConnectedControllerPublicProps {
  route: ConnectedController;
  navigation: ConnectedControllerNavigationProp;
}

export interface ConnectedControllerGeneratedProps {
  currentController?: Control;
  sendMessage: (message: string) => void;
}

export interface ConnectedControllerProps
  extends ConnectedControllerPublicProps,
    ConnectedControllerGeneratedProps {}
