import { ViewStyle } from 'react-native';

export interface ControlItemProps {
  containerStyle?: ViewStyle;
  label: string;
  onPress: () => void;
}
