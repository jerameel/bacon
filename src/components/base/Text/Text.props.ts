import { ViewStyle, TextStyle } from 'react-native';

export interface TextProps {
  containerStyle?: ViewStyle;
  style?: TextStyle;
  variant?: 'title' | 'body' | 'caption' | 'label';
  children: string;
}
