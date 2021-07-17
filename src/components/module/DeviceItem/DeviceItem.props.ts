import { ViewStyle } from 'react-native';
import { THEME_OPTION } from 'store/settings';

export interface DeviceItemProps {
  containerStyle?: ViewStyle;
  name: string;
  id: string;
  onPress: () => void;
  active?: boolean;
  theme?: THEME_OPTION;
}
