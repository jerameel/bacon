import React from 'react';
import { View } from 'react-native';
import Text from 'components/base/Text';
import styles from './SettingItem.style';
import { SettingItemProps } from './SettingItem.props';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingItem = (props: SettingItemProps) => {
  const { containerStyle = {}, label, description, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        <Text variant="label" style={styles.label}>
          {label}
        </Text>
        <Text variant="body" style={styles.description}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
