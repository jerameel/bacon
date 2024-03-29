import React, { useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import remove from 'ramda/src/remove';
import uniq from 'ramda/src/uniq';
import Text from 'components/base/Text';
import useStyles from './ConnectedController.style';
import { ConnectedControllerProps } from './ConnectedController.props';
import { AccountTree, Back } from 'components/base/SVG';
import { COLORS } from 'theme';
import ControlElementIcon from 'components/module/ControlElementIcon';
import SelectModal from 'components/module/SelectModal';

const ConnectedControllerView = (props: ConnectedControllerProps) => {
  const {
    navigation,
    route,
    currentController,
    sendMessage,
    characteristics,
    selectCharacteristic,
    selectedCharacteristic,
  } = props;

  const { styles, selectedTheme } = useStyles();

  const [showCharacteristicsModal, setShowCharacteristicsModal] =
    useState(false);
  const writeCharacteristics = characteristics.filter(
    (c) => c.properties.WriteWithoutResponse || c.properties.Write,
  );

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
        sendMessage(target.command.onRelease);
        const targetIndex = activeElements.findIndex(
          (activeElement) => activeElement === target.id,
        );
        setActiveElements((activeElement) =>
          remove(targetIndex, 1, activeElement),
        );
      } else if (!activeElements.includes(target.id)) {
        sendMessage(target.command.onPress);
        setActiveElements((activeElement) =>
          uniq([...activeElement, target.id]),
        );
      }
    }
  };

  const startTouchHandler = createTouchHandler({});
  const endTouchHandler = createTouchHandler({ isEnd: true });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS[selectedTheme].BACKGROUND}
        barStyle={selectedTheme === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerAction}
            activeOpacity={0.6}
            onPress={() => {
              navigation.goBack();
            }}>
            <Back width={32} height={32} fill={COLORS[selectedTheme].TITLE} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerAction}
            activeOpacity={0.6}
            onPress={() => {
              setShowCharacteristicsModal(true);
            }}>
            <AccountTree
              width={32}
              height={32}
              fill={COLORS[selectedTheme].TITLE}
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.content}
          onTouchStart={startTouchHandler}
          onTouchEnd={endTouchHandler}>
          {elements.map((a) => (
            <View
              key={a.id}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: a.size,
                height: a.size,
                position: 'absolute',
                top: a.y,
                left: a.x,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ControlElementIcon
                id={a.label}
                size={a.size}
                isHighlighted={activeElements.includes(a.id)}
              />
            </View>
          ))}
        </View>
      </View>
      <SelectModal
        title="Select Target Characteristic"
        visible={showCharacteristicsModal}
        onSelect={(v) => {
          selectCharacteristic(v);
          setShowCharacteristicsModal(false);
        }}
        selectedValue={selectedCharacteristic}
        options={writeCharacteristics.map((a) => ({
          label: a.characteristic,
          value: a.characteristic,
        }))}
        theme={selectedTheme}
      />
    </SafeAreaView>
  );
};

export default ConnectedControllerView;
