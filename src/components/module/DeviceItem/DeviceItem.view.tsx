import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from 'components/base/Text';
import styles from './DeviceItem.style';
import { DeviceItemProps } from './DeviceItem.props';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DeviceItem = (props: DeviceItemProps) => {
  const { containerStyle = {}, name, id, onPress, active } = props;

  const [activeIndicator, setShowActive] = useState(false);

  useEffect(() => {
    if (active !== undefined) {
      setTimeout(() => {
        setShowActive(active);
      }, 300);
    }
  }, [active]);
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.contentDetails}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textName}>
            {name}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textId}>
            {id}
          </Text>
        </View>
        <View
          style={
            activeIndicator
              ? styles.contentIndicatorActive
              : styles.contentIndicator
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default DeviceItem;
