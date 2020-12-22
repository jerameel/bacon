import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Text from '../../../src/components/base/Text';
import {
  /* PLOP_INJECT_IMPORT */
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
