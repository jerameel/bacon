import React from 'react';
import { View, StatusBar } from 'react-native';
import Button from 'components/base/Button';
import Text from 'components/base/Text';
import styles from './Home.style';
import { HomeProps } from './Home.props';
import { Device as DeviceIcon } from 'components/base/SVG';
import DeviceItem from 'components/module/DeviceItem';
import { Device } from 'store/ble';
import { FlatList } from 'react-native-gesture-handler';

const HomeView = (props: HomeProps) => {
  const { toggleScan, scanning, devices, navigation, onSelectItem } = props;

  const renderDeviceItem = ({ item }: { item: Device }) => {
    return (
      <DeviceItem
        containerStyle={styles.itemContainer}
        name={item.name}
        id={item.id}
        onPress={() => onSelectItem(item)}
      />
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Get Connected
          </Text>
        </View>
        {devices.length > 0 ? (
          <View style={styles.content}>
            <Text style={styles.textDeviceCount} variant="caption">
              {`${devices.length} Available Devices`}
            </Text>
            <FlatList
              data={devices}
              renderItem={renderDeviceItem}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<View style={styles.spacer} />}
            />
          </View>
        ) : (
          <View style={styles.emptyContent}>
            <DeviceIcon width={64} height={64} fill="#bfbfbf" />
            <Text style={styles.emptyTitle} variant="caption">
              No Available Devices
            </Text>
          </View>
        )}
        <View style={styles.action}>
          <Button
            loading={scanning}
            label={scanning ? 'Stop Scan' : 'Scan for Devices'}
            onPress={() => toggleScan()}
          />
        </View>
      </View>
    </>
  );
};

export default HomeView;
