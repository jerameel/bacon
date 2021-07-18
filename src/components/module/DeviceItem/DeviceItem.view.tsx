import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from 'components/base/Text';
import getStyles from './DeviceItem.style';
import { DeviceItemProps } from './DeviceItem.props';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Signal1, Signal2, Signal3, Signal4 } from 'components/base/SVG';
import { COLORS } from 'theme';

const DeviceItem = (props: DeviceItemProps) => {
  const { containerStyle = {}, name, id, onPress, active, theme, rssi } = props;
  const styles = getStyles(theme);

  const [activeIndicator, setShowActive] = useState(false);

  useEffect(() => {
    if (active !== undefined) {
      setTimeout(() => {
        setShowActive(active);
      }, 300);
    }
  }, [active]);

  const SignalIcon = (() => {
    const signalIconProps = {
      width: 32,
      height: 32,
      fill: COLORS[theme || 'Light'].SECONDARY_TEXT,
    };
    if (rssi > -27.5) {
      return <Signal4 {...signalIconProps} />;
    }

    if (rssi > -55.5) {
      return <Signal3 {...signalIconProps} />;
    }

    if (rssi > -83) {
      return <Signal2 {...signalIconProps} />;
    }

    return <Signal1 {...signalIconProps} />;
  })();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.6}
      onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.signalContainer}>{SignalIcon}</View>
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
