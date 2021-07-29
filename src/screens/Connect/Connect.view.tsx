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
import {
  Back,
  Bluetooth,
  BluetoothOff,
  Power,
  Signal1,
  Signal2,
  Signal3,
  Signal4,
} from 'components/base/SVG';
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
    rssi,
  } = props;

  const { styles, selectedTheme } = useStyles();

  const id = route.params.id || '';
  const name = route.params.name || '';

  const connectionFailed = initialized && !connecting && !connected;

  const SignalIcon = (() => {
    const signalIconProps = {
      width: 24,
      height: 24,
      fill: COLORS[selectedTheme].SECONDARY_TEXT,
    };
    if (rssi > -27.5) {
      return <Signal4 {...signalIconProps} />;
    }

    if (rssi > -55.5) {
      return <Signal3 {...signalIconProps} />;
    }

    if (rssi > -83) {
      return <Signal2 {...signalIconProps} />;
    }

    return <Signal1 {...signalIconProps} />;
  })();

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
              navigation.goBack();
            }}>
            <Back width={32} height={32} fill={COLORS[selectedTheme].TITLE} />
          </TouchableOpacity>
          <Text
            containerStyle={styles.headerTitleContainer}
            style={styles.headerTitle}
            variant="title">
            {connected ? 'Select Controller' : 'Connect'}
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

        {connecting && (
          <View style={styles.statusContent}>
            <Pulse size={24} color={COLORS[selectedTheme].PRIMARY} />

            <Text
              style={styles.label}
              containerStyle={styles.labelContainer}
              variant="caption">
              Connecting...
            </Text>
            <Text
              style={styles.deviceName}
              containerStyle={styles.deviceNameContainer}
              variant="body">
              {name && name !== 'Unknown Device' ? name : id}
            </Text>
          </View>
        )}

        {connectionFailed && (
          <View style={styles.statusContent}>
            <BluetoothOff
              width={48}
              height={48}
              fill={COLORS[selectedTheme].ERROR}
            />

            <Text
              style={styles.label}
              containerStyle={styles.labelContainer}
              variant="caption">
              Failed to connect
            </Text>
            <Text
              style={styles.deviceName}
              containerStyle={styles.deviceNameContainer}
              variant="body">
              {name && name !== 'Unknown Device' ? name : id}
            </Text>
          </View>
        )}

        {connected && (
          <View style={styles.content}>
            <View style={styles.detailsContent}>
              <View style={styles.detailsColumn}>
                <Text style={styles.detailsName} variant="body">
                  {name}
                </Text>
                <Text style={styles.detailsId} variant="body">
                  {id}
                </Text>
              </View>
              <View style={styles.detailsSignalContainer}>
                {SignalIcon}
                <Text style={styles.detailsSignal} variant="caption">
                  {`${rssi.toString()} dBm`}
                </Text>
              </View>
            </View>
            {controllers.length > 0 ? (
              <FlatList
                data={controllers}
                renderItem={renderControllerItem}
                keyExtractor={(item) => item.id}
                ListFooterComponent={<View style={styles.spacer} />}
              />
            ) : (
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
          </View>
        )}

        {connecting && (
          <View style={styles.action}>
            <Button
              outline
              label={'Cancel'}
              onPress={() => disconnect()}
              theme={selectedTheme}
            />
          </View>
        )}

        {connectionFailed && (
          <View style={styles.action}>
            <Button
              outline
              label={'Go Back'}
              onPress={() => navigation.goBack()}
              theme={selectedTheme}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ConnectView;
