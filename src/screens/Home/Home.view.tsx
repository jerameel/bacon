import React from 'react';
import { View, StatusBar } from 'react-native';
import Button from 'components/base/Button';
import Text from 'components/base/Text';
import styles from './Home.style';
import { HomeProps } from './Home.props';
import { Device } from 'components/base/SVG';

const HomeView = (props: HomeProps) => {
  const { toggleScan, scanning } = props;
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Get Connected
          </Text>
        </View>
        <View style={styles.emptyContent}>
          <Device width={64} height={64} fill="#bfbfbf" />
          <Text style={styles.emptyTitle} variant="caption">
            No Available Devices
          </Text>
        </View>
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
