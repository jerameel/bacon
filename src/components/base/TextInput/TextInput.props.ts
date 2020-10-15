import { ViewStyle } from 'react-native';

export interface TextInputProps {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  label: string;
  value: string;
  onChangeText: (value: string) => void;
}
