import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Text from 'components/base/Text';
import styles from './ControlItem.style';
import { ControlItemProps } from './ControlItem.props';
import { Bluetooth } from 'components/base/SVG';

const ControlItem = (props: ControlItemProps) => {
  const { containerStyle = {}, label, onPress } = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Bluetooth width={32} height={32} fill="#1890ff" />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        containerStyle={styles.labelContainer}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ControlItem;
