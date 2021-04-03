import { ViewStyle } from 'react-native';

export interface DeviceItemProps {
  containerStyle?: ViewStyle;
  name: string;
  id: string;
  onPress: () => void;
}
