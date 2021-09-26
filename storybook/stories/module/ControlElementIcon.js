import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ControlElementIcon from '../../../src/components/module/ControlElementIcon';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

storiesOf('module/ControlElementIcon', module).add('Summary', () => (
  <View style={styles.container}>
    <ControlElementIcon />
  </View>
));
