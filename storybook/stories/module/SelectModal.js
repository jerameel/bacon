import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SelectModal from '../../../src/components/module/SelectModal';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

storiesOf('module/SelectModal', module).add('Summary', () => (
  <View style={styles.container}>
    <SelectModal />
  </View>
));
