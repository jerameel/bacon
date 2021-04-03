import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from 'types/Route';

export interface ConnectRouterProps {
  id?: string;
  name?: string;
}

type Connect = RouteProp<MainStackParamList, 'CONNECT'>;

type ConnectNavigationProp = StackNavigationProp<MainStackParamList, 'CONNECT'>;

export interface ConnectPublicProps {
  route: Connect;
  navigation: ConnectNavigationProp;
}

export interface ConnectGeneratedProps {
  connecting: boolean;
  connected: boolean;
  disconnect: () => void;
  initialized: boolean;
}

export interface ConnectProps
  extends ConnectPublicProps,
    ConnectGeneratedProps {}
