import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  ActivityIndicator,
  BackHandler,
  FlatList,
} from 'react-native';

import Text from 'components/base/Text';
import styles from './Connect.style';
import { ConnectProps } from './Connect.props';
import { Back, Bluetooth, BluetoothOff } from 'components/base/SVG';
import Button from 'components/base/Button';
import { Control as ControlIcon } from 'components/base/SVG';
import ControlItem from 'components/module/ControlItem';
import { Control } from 'store/controls';

const ConnectView = (props: ConnectProps) => {
  const {
    navigation,
    route,
    connecting,
    connected,
    disconnect,
    initialized,
    controllers,
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

  const [showControllers, setShowControllers] = useState(false);

  const renderControllerItem = ({ item }: { item: Control }) => {
    return (
      <ControlItem
        containerStyle={styles.itemContainer}
        label={item.label}
        onPress={() => {
          navigation.navigate('CONNECTED_CONTROLLER', { id: item.id });
        }}
      />
    );
  };

  useEffect(() => {
    const backAction = () => {
      if (showControllers) {
        setShowControllers(false);
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [showControllers]);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerAction}
            activeOpacity={0.6}
            onPress={() => {
              if (showControllers) {
                setShowControllers(false);
              } else {
                navigation.goBack();
              }
            }}>
            <Back width={32} height={32} />
          </TouchableOpacity>
          <Text
            containerStyle={styles.headerTitleContainer}
            style={styles.headerTitle}
            variant="title">
            {showControllers ? 'Select Controller' : 'Connect'}
          </Text>
        </View>

        {(connecting || connected || connectionFailed) && !showControllers && (
          <View style={styles.statusContent}>
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
        )}

        {!(connecting || connected || connectionFailed || showControllers) && (
          <View style={styles.content} />
        )}

        {showControllers && controllers.length > 0 && (
          <View style={styles.content}>
            <FlatList
              data={controllers}
              renderItem={renderControllerItem}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<View style={styles.spacer} />}
            />
          </View>
        )}

        {showControllers && controllers.length === 0 && (
          <View style={styles.emptyContent}>
            <ControlIcon width={56} height={56} fill="#bfbfbf" />
            <Text style={styles.emptyTitle} variant="caption">
              No Available Controllers
            </Text>
          </View>
        )}

        <View style={styles.action}>
          {connected && !showControllers && (
            <Button
              containerStyle={styles.secondaryActionButton}
              label={'Next'}
              onPress={() => setShowControllers(true)}
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
