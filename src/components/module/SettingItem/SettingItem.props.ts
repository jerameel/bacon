import { ViewStyle } from 'react-native';

export interface SettingItemProps {
  containerStyle?: ViewStyle;
  label: string;
  description: string;
  onPress: () => void;
}
