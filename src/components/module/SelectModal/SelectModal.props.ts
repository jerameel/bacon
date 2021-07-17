import { ViewStyle } from 'react-native';
import { THEME_OPTION } from 'store/settings';

export interface SelectModalProps {
  containerStyle?: ViewStyle;
  visible?: boolean;
  onSelect?: (value: string) => void;
  selectedValue?: string;
  options: {
    label: string;
    value: string;
  }[];
  title: string;
  theme?: THEME_OPTION;
}
