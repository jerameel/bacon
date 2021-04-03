import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

import Text from 'components/base/Text';
import styles from './Connect.style';
import { ConnectProps } from './Connect.props';
import { Back, Bluetooth, BluetoothOff } from 'components/base/SVG';
import Button from 'components/base/Button';

const ConnectView = (props: ConnectProps) => {
  const {
    navigation,
    route,
    connecting,
    connected,
    disconnect,
    initialized,
  } = props;

  const id = route.params.id || '';
  const name = route.params.name || '';

  const connectionFailed = initialized && !connecting && !connected;

  const statusLabel = (() => {
    if (connecting) {
      return 'Establishing connection to';
    }

    if (connected) {
      return 'Connected to';
    }

    if (connectionFailed) {
      return 'Failed to connect to';
    }

    return '';
  })();

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerAction}
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}>
            <Back width={32} height={32} />
          </TouchableOpacity>
          <Text
            containerStyle={styles.headerTitleContainer}
            style={styles.headerTitle}
            variant="title">
            Connect
          </Text>
        </View>

        <View style={styles.content}>
          {connecting && <ActivityIndicator color="#0050B3" size="large" />}
          {connected && <Bluetooth fill="#0050B3" width={48} height={48} />}
          {connectionFailed && (
            <BluetoothOff fill="#cf1322" width={48} height={48} />
          )}
          <Text
            style={styles.label}
            containerStyle={styles.labelContainer}
            variant="caption">
            {statusLabel}
          </Text>
          <Text
            style={
              connectionFailed ? styles.deviceNameError : styles.deviceName
            }
            containerStyle={styles.deviceNameContainer}
            variant="body">
            {name && name !== 'Unknown Device' ? name : id}
          </Text>
        </View>

        <View style={styles.action}>
          {connected && (
            <Button
              containerStyle={styles.secondaryActionButton}
              label={'Next'}
              onPress={() => {}}
            />
          )}
          <Button
            outline
            label={connected ? 'Disconnect' : 'Cancel'}
            onPress={() => disconnect()}
          />
        </View>
      </View>
    </>
  );
};

export default ConnectView;
