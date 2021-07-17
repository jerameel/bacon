import { ViewStyle } from 'react-native';
import { THEME_OPTION } from 'store/settings';

export interface TextInputProps {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  theme?: THEME_OPTION;
}
