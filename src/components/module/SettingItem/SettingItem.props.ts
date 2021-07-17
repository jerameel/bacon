import { ViewStyle } from 'react-native';
import { THEME_OPTION } from 'store/settings';

export interface SettingItemProps {
  containerStyle?: ViewStyle;
  label: string;
  description: string;
  onPress: () => void;
  theme?: THEME_OPTION;
}
