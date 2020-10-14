import { ViewStyle } from 'react-native';

export interface TextProps {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  variant?: 'title' | 'body' | 'caption' | 'label';
  children: string;
}
