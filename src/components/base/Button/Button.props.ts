import { ViewStyle } from 'react-native';
import { THEME_OPTION } from 'store/settings';

export interface ButtonProps {
  containerStyle?: ViewStyle;
  label: string;
  onPress: () => void;
  outline?: boolean;
  loading?: boolean;
  disabled?: boolean;
  theme?: THEME_OPTION;
}
