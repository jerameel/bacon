import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import getStyles from './Button.style';
import { ButtonProps } from './Button.props';
import { Pulse } from 'react-native-loader';
import { COLORS } from 'theme';

const Button = (props: ButtonProps) => {
  const {
    containerStyle = {},
    onPress,
    label,
    outline,
    loading,
    disabled,
    theme,
  } = props;
  const styles = getStyles(theme);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        outline ? styles.outlineContainer : styles.container,
        containerStyle,
        disabled
          ? outline
            ? styles.outlineContainerDisabled
            : styles.containerDisabled
          : {},
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
        <Pulse
          size={12}
          color={
            outline ? COLORS[theme || 'Light'].TITLE : COLORS.DARK.PRIMARY_TEXT
          }
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
