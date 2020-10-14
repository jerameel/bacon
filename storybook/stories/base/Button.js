import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../../src/components/base/Button';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

storiesOf('base/Button', module).add('Summary', () => (
  <View style={styles.container}>
    <Button label="Button" onPress={() => console.log('ACTION_EVENT')} />
  </View>
));
