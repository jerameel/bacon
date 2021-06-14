import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingItem from '../../../src/components/module/SettingItem';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

storiesOf('module/SettingItem', module).add('Summary', () => (
  <View style={styles.container}>
    <SettingItem />
  </View>
));
