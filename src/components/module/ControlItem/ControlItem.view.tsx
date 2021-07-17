import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Text from 'components/base/Text';
import getStyles from './ControlItem.style';
import { ControlItemProps } from './ControlItem.props';

const ControlItem = (props: ControlItemProps) => {
  const { containerStyle = {}, label, onPress, theme } = props;
  const styles = getStyles(theme);
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.6}
      onPress={onPress}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.label}
        containerStyle={styles.labelContainer}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ControlItem;
