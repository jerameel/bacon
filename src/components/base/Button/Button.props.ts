import { ViewStyle } from 'react-native';

export interface ButtonProps {
  containerStyle?: ViewStyle;
  label: string;
  onPress: () => void;
}
