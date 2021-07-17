import React from 'react';
import { View, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Button from 'components/base/Button';
import Text from 'components/base/Text';
import useStyles from './Home.style';
import { HomeProps } from './Home.props';
import { Device as DeviceIcon } from 'components/base/SVG';
import DeviceItem from 'components/module/DeviceItem';
import { Device } from 'store/ble';
import { FlatList } from 'react-native-gesture-handler';
import { COLORS } from 'theme';

const HomeView = (props: HomeProps) => {
  const {
    toggleScan,
    scanning,
    devices,
    navigation,
    onSelectItem,
    currentConnectionId,
  } = props;

  const { styles, selectedTheme } = useStyles();

  const renderDeviceItem = ({ item }: { item: Device }) => {
    return (
      <DeviceItem
        containerStyle={styles.itemContainer}
        name={item.name}
        id={item.id}
        onPress={() => onSelectItem(item)}
        active={item.id === currentConnectionId}
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
            <DeviceIcon
              width={64}
              height={64}
              fill={COLORS[selectedTheme].PLACE_HOLDER}
            />
            <Text style={styles.emptyTitle} variant="caption">
              No Available Devices
            </Text>
          </View>
        )}
        <View style={styles.action}>
          <Button
            disabled={(currentConnectionId || '').length > 0}
            loading={scanning}
            label={scanning ? 'Stop Scan' : 'Scan for Devices'}
            onPress={() => toggleScan()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
