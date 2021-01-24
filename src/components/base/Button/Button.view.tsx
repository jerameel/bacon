import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';
import { ButtonProps } from './Button.props';

const Button = (props: ButtonProps) => {
  const { containerStyle = {}, onPress, label, outline } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        outline ? styles.outlineContainer : styles.container,
        containerStyle,
      ]}
      onPress={onPress}>
      <Text style={outline ? styles.outlineText : styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
