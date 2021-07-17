import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  ActivityIndicator,
  BackHandler,
  FlatList,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Pulse } from 'react-native-loader';

import Text from 'components/base/Text';
import useStyles from './Connect.style';
import { ConnectProps } from './Connect.props';
import { Back, Bluetooth, BluetoothOff, Power } from 'components/base/SVG';
import Button from 'components/base/Button';
import { Control as ControlIcon } from 'components/base/SVG';
import ControlItem from 'components/module/ControlItem';
import { Control } from 'store/controls';
import { COLORS } from 'theme';

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

  const { styles, selectedTheme } = useStyles();

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
        theme={selectedTheme}
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS[selectedTheme].BACKGROUND}
        barStyle={selectedTheme === 'Dark' ? 'light-content' : 'dark-content'}
      />
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
            <Back width={32} height={32} fill={COLORS[selectedTheme].TITLE} />
          </TouchableOpacity>
          <Text
            containerStyle={styles.headerTitleContainer}
            style={styles.headerTitle}
            variant="title">
            {showControllers ? 'Select Controller' : 'Connect'}
          </Text>
          <TouchableOpacity
            style={styles.headerAction}
            activeOpacity={0.6}
            onPress={() => {
              disconnect();
            }}>
            {connected && (
              <Power
                width={32}
                height={32}
                fill={COLORS[selectedTheme].ERROR}
              />
            )}
          </TouchableOpacity>
        </View>

        {!showControllers && (
          <View style={styles.statusContent}>
            {connecting && (
              <Pulse size={24} color={COLORS[selectedTheme].PRIMARY} />
            )}
            {connected && (
              <Bluetooth
                fill={COLORS[selectedTheme].PRIMARY}
                width={48}
                height={48}
              />
            )}
            {connectionFailed && (
              <BluetoothOff
                fill={COLORS[selectedTheme].PRIMARY}
                width={48}
                height={48}
              />
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
            {/* {connected && (
              <Button
                containerStyle={styles.disconnectButton}
                outline
                label={'Disconnect'}
                onPress={() => disconnect()}
              />
            )} */}
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
            <ControlIcon
              width={56}
              height={56}
              fill={COLORS[selectedTheme].PLACE_HOLDER}
            />
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
              theme={selectedTheme}
            />
          )}
          {!connected && !showControllers && (
            <Button
              outline
              label={connected ? 'Disconnect' : 'Cancel'}
              onPress={() => disconnect()}
              theme={selectedTheme}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConnectView;
