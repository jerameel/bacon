import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { bleActions } from 'store/ble';

import {
  ConnectedControllerGeneratedProps,
  ConnectedControllerPublicProps,
} from './ConnectedController.props';
import ConnectedControllerView from './ConnectedController.view';

const ConnectedControllerScreen = (props: ConnectedControllerPublicProps) => {
  const id = props.route.params.id || '';

  const dispatch = useDispatch();
  const bleState = useSelector((state: RootState) => state.ble);
  const characteristics = bleState.connection.characteristics || [];
  const selectedCharacteristic =
    bleState.connection.targetWrite?.characteristicUUID || '';
  const controllers = useSelector((state: RootState) => state.controls);
  const monitorLogs = useSelector((state: RootState) => state.monitor);

  const currentController = controllers.find((a) => a.id === id);

  const selectCharacteristic = (characteristicUUID: string) => {
    if (characteristicUUID) {
      dispatch(bleActions.updateTargetWriteCharacteristic(characteristicUUID));
    }
  };

  const sendMessage = (message: string) => {
    if (message) {
      dispatch(bleActions.sendMessage(message));
    }
  };

  const generatedProps: ConnectedControllerGeneratedProps = {
    currentController,
    sendMessage,
    characteristics,
    selectCharacteristic,
    selectedCharacteristic,
    monitorLogs,
  };

  return <ConnectedControllerView {...props} {...generatedProps} />;
};

export default ConnectedControllerScreen;
