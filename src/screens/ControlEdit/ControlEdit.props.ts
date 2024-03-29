import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from 'types/Route';
import { Control, ControlElement } from 'store/controls';

export interface ControlEditRouterProps {
  id?: string;
}

type ControlEdit = RouteProp<MainStackParamList, 'CONTROL_EDIT'>;

type ControlEditNavigationProp = StackNavigationProp<
  MainStackParamList,
  'CONTROL_EDIT'
>;

export interface ControlEditPublicProps {
  route: ControlEdit;
  navigation: ControlEditNavigationProp;
}

export interface ControlEditGeneratedProps {
  saveController: (data: {
    id?: string;
    label?: string;
    elements?: ControlElement[];
  }) => void;
  duplicateController: (data: {
    label: string;
    elements: ControlElement[];
  }) => void;
  deleteController: (id: string) => void;
  controllers: Control[];
}

export interface ControlEditProps
  extends ControlEditPublicProps,
    ControlEditGeneratedProps {}
