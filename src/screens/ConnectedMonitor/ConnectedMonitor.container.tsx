import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { bleActions } from 'store/ble';

import {
  ConnectedMonitorGeneratedProps,
  ConnectedMonitorPublicProps,
} from './ConnectedMonitor.props';
import ConnectedMonitorView from './ConnectedMonitor.view';

const ConnectedMonitorScreen = (props: ConnectedMonitorPublicProps) => {
  const dispatch = useDispatch();
  const bleState = useSelector((state: RootState) => state.ble);

  const monitorLogs = useSelector((state: RootState) => state.monitor);
  const characteristics = bleState.connection.characteristics || [];
  const selectedCharacteristic =
    bleState.connection.targetWrite?.characteristicUUID || '';

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

  const generatedProps: ConnectedMonitorGeneratedProps = {
    sendMessage,
    characteristics,
    selectCharacteristic,
    selectedCharacteristic,
    monitorLogs,
  };

  return <ConnectedMonitorView {...props} {...generatedProps} />;
};

export default ConnectedMonitorScreen;
