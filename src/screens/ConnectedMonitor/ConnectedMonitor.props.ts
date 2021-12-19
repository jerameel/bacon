import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MonitorLog } from 'store/monitor';
import { MainStackParamList } from 'types/Route';

export interface ConnectedMonitorRouterProps {}

type ConnectedMonitor = RouteProp<MainStackParamList, 'CONNECTED_MONITOR'>;

type ConnectedMonitorNavigationProp = StackNavigationProp<
  MainStackParamList,
  'CONNECTED_CONTROLLER'
>;

export interface ConnectedMonitorPublicProps {
  route: ConnectedMonitor;
  navigation: ConnectedMonitorNavigationProp;
}

export interface ConnectedMonitorGeneratedProps {
  sendMessage: (message: string) => void;
  characteristics: any[];
  selectCharacteristic: (characteristicUUID: string) => void;
  selectedCharacteristic: string;
  monitorLogs: MonitorLog[];
}

export interface ConnectedMonitorProps
  extends ConnectedMonitorPublicProps,
    ConnectedMonitorGeneratedProps {}
