import { ViewStyle } from 'react-native';
import { THEME_OPTION } from 'store/settings';

export interface AlertModalProps {
  containerStyle?: ViewStyle;
  visible?: boolean;
  title?: string;
  description?: string;
  actions?: {
    onPress: () => void;
    label: string;
  }[];
  theme?: THEME_OPTION;
}
