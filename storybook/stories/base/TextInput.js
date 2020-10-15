import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '../../../src/components/base/TextInput';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  marginTop: {
    marginTop: 8,
  },
});

const Component = ({}) => {
  const [value, setValue] = useState('');
  const [command, setCommand] = useState('');
  return (
    <View style={styles.container}>
      <TextInput label="Value" value={value} onChangeText={setValue} />

      <TextInput
        containerStyle={styles.marginTop}
        label="Command"
        value={command}
        onChangeText={setCommand}
      />
    </View>
  );
};

storiesOf('base/TextInput', module).add('Summary', () => <Component />);
