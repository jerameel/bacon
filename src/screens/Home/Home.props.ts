import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList, MainTabParamList } from 'types/Route';

export interface HomeRouterProps {}

type HomeRouteProp = RouteProp<MainStackParamList, 'MAIN'>;

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList, 'HOME'>,
  StackNavigationProp<MainStackParamList, 'MAIN'>
>;

export interface HomePublicProps {
  route: HomeRouteProp;
  navigation: HomeNavigationProp;
}

export interface HomeGeneratedProps {
  toggleScan: () => void;
  scanning: boolean;
  devices: {
    id: string;
    name: string;
  }[];
  onSelectItem: (item: { id: string, name: string }) => void;
  currentConnectionId: string;
}

export interface HomeProps extends HomePublicProps, HomeGeneratedProps {}
