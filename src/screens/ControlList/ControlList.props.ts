import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from 'types/Route';

export interface ControlListRouterProps {}

export interface ControlListProps
  extends StackScreenProps<RootStackParamList, 'ControlList'> {}
