import React from 'react';
import { View } from 'react-native';
import Text from 'components/base/Text';
import styles from './DeviceItem.style';
import { DeviceItemProps } from './DeviceItem.props';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DeviceItem = (props: DeviceItemProps) => {
  const { containerStyle = {}, name, id, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.content}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textName}>
          {name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textId}>
          {id}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeviceItem;
