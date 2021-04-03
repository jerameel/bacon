import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DeviceItem from '../../../src/components/module/DeviceItem';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

storiesOf('module/DeviceItem', module).add('Summary', () => (
  <View style={styles.container}>
    <DeviceItem name="Unknown Device" id="AA:BB:CC:12:34:56" />
  </View>
));
