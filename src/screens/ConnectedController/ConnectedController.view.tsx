import React, { useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';

import remove from 'ramda/src/remove';
import uniq from 'ramda/src/uniq';
import Text from 'components/base/Text';
import styles from './ConnectedController.style';
import { ConnectedControllerProps } from './ConnectedController.props';
import { Back } from 'components/base/SVG';

const ConnectedControllerView = (props: ConnectedControllerProps) => {
  const { navigation, route, currentController, sendMessage } = props;

  const elements = currentController?.elements || [];

  const [activeElements, setActiveElements] = useState<string[]>([]);

  const createTouchHandler = (config: { isEnd?: boolean }) => (event: any) => {
    const { pageX, pageY } = event.nativeEvent;
    const actualX = pageX;
    const actualY = pageY - 80; // header height

    const target = elements.find(({ x, y, size }) => {
      if (
        actualX > x &&
        actualX < x + size &&
        actualY > y &&
        actualY < y + size
      ) {
        return true;
      }
      return false;
    });
    if (target) {
      if (config.isEnd) {
        sendMessage(target.command.onRelease)
        const targetIndex = activeElements.findIndex(
          (activeElement) => activeElement === target.id,
        );
        setActiveElements((activeElement) =>
          remove(targetIndex, 1, activeElement),
        );
      } else if (!activeElements.includes(target.id)) {
        sendMessage(target.command.onPress)
        setActiveElements((activeElement) =>
          uniq([...activeElement, target.id]),
        );
      }
    }
  };

  const startTouchHandler = createTouchHandler({});
  const endTouchHandler = createTouchHandler({ isEnd: true });
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerAction}
            activeOpacity={0.6}
            onPress={() => {
              navigation.goBack();
            }}>
            <Back width={32} height={32} />
          </TouchableOpacity>
        </View>
        <View
          style={styles.content}
          onTouchStart={startTouchHandler}
          onTouchEnd={endTouchHandler}>
          {elements.map((a) => (
            <View
              style={{
                width: a.size,
                height: a.size,
                backgroundColor: activeElements.includes(a.id) ? '#595959' :'#000',
                position: 'absolute',
                top: a.y,
                left: a.x,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#fff' }}>{a.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default ConnectedControllerView;
