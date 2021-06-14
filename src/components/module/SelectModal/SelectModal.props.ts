import { ViewStyle } from 'react-native';

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
}
