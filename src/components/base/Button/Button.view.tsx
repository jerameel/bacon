import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Button.style';
import { ButtonProps } from './Button.props';

const Button = (props: ButtonProps) => {
  const { containerStyle = {}, onPress, label, outline, loading } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        outline ? styles.outlineContainer : styles.container,
        containerStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          outline ? styles.outlineText : styles.text,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginRight: loading ? 8 : 0,
          },
        ]}>
        {label}
      </Text>
      {loading && (
        <ActivityIndicator color={outline ? '#000' : '#fff'} size={'small'} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
