import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addControllerAction } from 'store/controls';
import {
  ControlListGeneratedProps,
  ControlListPublicProps,
} from './ControlList.props';
import ControlListView from './ControlList.view';

const ControlListScreen = (props: ControlListPublicProps) => {
  const dispatch = useDispatch();

  const addController = () => {
    dispatch(addControllerAction({}));
  };

  const controllers = useSelector((state: RootState) => state.controls);

  const generatedProps: ControlListGeneratedProps = {
    addController,
    controllers,
  };

  return <ControlListView {...props} {...generatedProps} />;
};

export default ControlListScreen;
