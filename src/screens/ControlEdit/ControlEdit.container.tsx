import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  addControllerAction,
  ControlElement,
  deleteControllerAction,
  updateControllerAction,
} from 'store/controls';
import {
  ControlEditGeneratedProps,
  ControlEditPublicProps,
} from './ControlEdit.props';
import ControlEditView from './ControlEdit.view';

const ControlEditScreen = (props: ControlEditPublicProps) => {
  const dispatch = useDispatch();

  const saveController = (data: {
    id?: string;
    label?: string;
    elements?: ControlElement[];
  }) => {
    if (data.id) {
      dispatch(updateControllerAction(data));
    } else {
      dispatch(
        addControllerAction({
          label: data.label || 'New Controller',
          elements: data.elements || [],
        }),
      );
    }
  };

  const deleteController = (id: string) => {
    dispatch(deleteControllerAction({ id }));
  };

  const controllers = useSelector((state: RootState) => state.controls);

  const generatedProps: ControlEditGeneratedProps = {
    saveController,
    deleteController,
    controllers,
  };

  return <ControlEditView {...props} {...generatedProps} />;
};

export default ControlEditScreen;
