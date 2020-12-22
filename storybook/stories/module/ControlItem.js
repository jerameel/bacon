import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ControlItem from '../../../src/components/module/ControlItem';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

storiesOf('module/ControlItem', module).add('Summary', () => (
  <View style={styles.container}>
    <ControlItem label="Short Text" />
    <ControlItem
      containerStyle={{ marginTop: 8 }}
      label="A Very Very Very Very Very Very Long Label"
    />
  </View>
));
