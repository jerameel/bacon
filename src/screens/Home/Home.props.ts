import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from 'types/Route';

export interface HomeRouterProps {}

export interface HomeProps
  extends StackScreenProps<RootStackParamList, 'Home'> {}
