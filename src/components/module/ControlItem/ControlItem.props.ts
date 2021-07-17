import { ViewStyle } from 'react-native';
import { THEME_OPTION } from 'store/settings';

export interface ControlItemProps {
  containerStyle?: ViewStyle;
  label: string;
  onPress: () => void;
  theme?: THEME_OPTION;
}
