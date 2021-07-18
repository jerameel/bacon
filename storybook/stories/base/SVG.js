import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Text from '../../../src/components/base/Text';
import {
  /* PLOP_INJECT_IMPORT */
  Signal4,
  Signal2,
  Signal1,
  Signal3,
  Power,
  BluetoothOff,
  Down,
  Add,
  Close,
  Delete,
  Back,
  Bluetooth,
  More,
  Settings,
  Control,
  Device,
} from '../../../src/components/base/SVG';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, flexDirection: 'row', flexWrap: 'wrap' },
  wrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 8,
    width: 64,
    height: 64,
  },
  text: {
    color: '#000',
    marginTop: 5,
  },
});

const SVGWrapper = ({ children, label }) => {
  return (
    <View style={styles.wrapper}>
      {children}
      <Text variant="caption" style={styles.text}>
        {label}
      </Text>
    </View>
  );
};

storiesOf('base/SVGs', module).add('Summary', () => (
  <View style={styles.container}>
    {/* PLOP_INJECT_INSTANCE*/}
    <SVGWrapper label="Signal4">
      <Signal4 fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Signal2">
      <Signal2 fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Signal1">
      <Signal1 fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Signal3">
      <Signal3 fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Power">
      <Power fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="BluetoothOff">
      <BluetoothOff fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Down">
      <Down fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Add">
      <Add fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Close">
      <Close fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Delete">
      <Delete fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Back">
      <Back fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Bluetooth">
      <Bluetooth fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="More">
      <More fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Settings">
      <Settings fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Control">
      <Control fill="#000" />
    </SVGWrapper>
    <SVGWrapper label="Device">
      <Device fill="#000" />
    </SVGWrapper>
  </View>
));
