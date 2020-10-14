import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';
import { ButtonProps } from './Button.props';

const Button = (props: ButtonProps) => {
  const { containerStyle = {}, onPress, label } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
