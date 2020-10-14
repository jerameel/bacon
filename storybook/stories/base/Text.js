import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../../src/components/base/Text';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

storiesOf('base/Text', module).add('Summary', () => (
  <View style={styles.container}>
    <Text variant="title">Title</Text>
    <Text>Body</Text>
    <Text variant="caption">Caption</Text>
    <Text variant="label">Label</Text>
  </View>
));
