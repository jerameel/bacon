import React from 'react';
import { View, Text as RNText } from 'react-native';
import styles, { fontStyles } from './Text.style';
import { TextProps } from './Text.props';

const Text = (props: TextProps) => {
  const { containerStyle = {}, style = {}, children, variant = 'body' } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <RNText style={[fontStyles[variant], style]}>{children}</RNText>
    </View>
  );
};

export default Text;
