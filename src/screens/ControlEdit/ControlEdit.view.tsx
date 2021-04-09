import React, {
  memo,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  BackHandler,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import Slider from 'react-native-slider';
import Draggable from 'react-native-draggable';
import { v1 as uuidv1 } from 'uuid';
import Text from 'components/base/Text';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import styles from './ControlEdit.style';
import { ControlEditProps } from './ControlEdit.props';
import { Add, Back, Close, Delete, Down } from 'components/base/SVG';
import { ControlElement } from 'store/controls';
import { propertiesToSaveElementData } from './ControlEdit.transform';
import { COLORS } from 'theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewHeight = windowHeight - 80; // header size

const DraggableControl = memo(
  (
    props: ControlElement & {
      onUpdate: (id: string, x: number, y: number) => void;
      onClick: (id: string) => void;
      label: string;
      size: number;
    },
  ) => {
    return (
      <Draggable
        x={props.x}
        y={props.y}
        renderText={props.label || ''}
        renderColor={'black'}
        renderSize={props.size || 80}
        onShortPressRelease={() => {
          props.onClick(props.id);
        }}
        minY={0}
        minX={0}
        maxX={windowWidth}
        maxY={viewHeight}
        onDragRelease={(evt, gesture, bounds) => {
          // update x and y value
          props.onUpdate(props.id, bounds.left, bounds.top);
        }}
      />
    );
  },
);

const ControlEditView = (props: ControlEditProps) => {
  const {
    controllers,
    saveController,
    deleteController,
    navigation,
    route,
  } = props;

  const id = route.params.id || '';
  const currentController = controllers.find(
    (controller) => controller.id === id,
  );

  const [showEditLayout, setShowEditLayout] = useState(false);
  const [label, setLabel] = useState(currentController?.label || '');
  const [syncedElementPosition, setSyncedElementPosition] = useState(false);
  const [elements, setElements] = useState<ControlElement[]>(
    currentController?.elements || [],
  );

  const [currentElementId, setCurrentElementId] = useState('');
  const currentElement = elements.find((a) => a.id === currentElementId);

  type ElementPositions = Record<
    string,
    {
      x: number;
      y: number;
    }
  >;

  const [elementPositions, updateElementPosition] = useReducer(
    (state: ElementPositions, newState: ElementPositions) => {
      return {
        ...state,
        ...newState,
      };
    },
    {},
  );

  type ElementLabel = Record<string, string>;

  const [elementLabels, updateElementLabel] = useReducer(
    (state: ElementLabel, newState: ElementLabel) => {
      return {
        ...state,
        ...newState,
      };
    },
    {},
  );

  type ElementSize = Record<string, number>;

  const [elementSizes, updateElementSize] = useReducer(
    (state: ElementSize, newState: ElementSize) => {
      return {
        ...state,
        ...newState,
      };
    },
    {},
  );

  const [elementsOnPress, updateElementsOnPress] = useReducer(
    (state: ElementLabel, newState: ElementLabel) => {
      return {
        ...state,
        ...newState,
      };
    },
    {},
  );

  const [elementsOnRelease, updateElementsOnRelease] = useReducer(
    (state: ElementLabel, newState: ElementLabel) => {
      return {
        ...state,
        ...newState,
      };
    },
    {},
  );

  const addElement = () => {
    const newElement: ControlElement = {
      id: uuidv1(),
      label: 'X',
      x: windowWidth / 2,
      y: viewHeight / 2,
      size: 80,
      command: {
        onPress: '',
        onRelease: '',
      },
    };
    setElements((a) => {
      return [...a, newElement];
    });
  };

  const saveElementPosition = useCallback(
    (elementId: string, x: number, y: number) => {
      updateElementPosition({
        [elementId]: {
          x,
          y,
        },
      });
    },
    [],
  );

  const showDeleteAction = id.length > 0 && !showEditLayout;

  useEffect(() => {
    const backAction = () => {
      if (showEditLayout) {
        setShowEditLayout(false);
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [showEditLayout]);

  useEffect(() => {
    if (showEditLayout && syncedElementPosition) {
      setSyncedElementPosition(false);
    }

    if (!showEditLayout && !syncedElementPosition) {
      setElements((a) => {
        return a.map((b) => {
          return elementPositions[b.id]
            ? {
                ...b,
                x: elementPositions[b.id].x,
                y: elementPositions[b.id].y,
              }
            : b;
        });
      });
      setSyncedElementPosition(true);
    }
  }, [showEditLayout, elementPositions, syncedElementPosition]);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        {showEditLayout ? (
          <>
            <Modal
              animationType="slide"
              transparent={true}
              visible={currentElementId.length > 0}
              onRequestClose={() => {
                setCurrentElementId('');
              }}>
              <View
                onTouchStart={() => setCurrentElementId('')}
                style={styles.modalClickableLayer}>
                <Down width={32} height={32} fill={'#000'} />
              </View>
              <View style={styles.modalContentLayer}>
                <TextInput
                  label="Label"
                  value={
                    elementLabels[currentElementId] === undefined
                      ? currentElement?.label || ''
                      : elementLabels[currentElementId]
                  }
                  onChangeText={(t) => {
                    updateElementLabel({
                      [currentElementId]: t,
                    });
                  }}
                />
                <Text containerStyle={styles.modalLabel} variant="caption">
                  {`Size (${(
                    (elementSizes[currentElementId] ||
                      currentElement?.size ||
                      80) / 80
                  ).toFixed(2)})`}
                </Text>
                <View style={styles.modalSliderContainer}>
                  <Slider
                    minimumValue={32}
                    maximumValue={128}
                    value={
                      elementSizes[currentElementId] ||
                      currentElement?.size ||
                      80
                    }
                    onValueChange={(s) => {
                      updateElementSize({
                        [currentElementId]: s,
                      });
                    }}
                    step={8}
                  />
                </View>
                <Text containerStyle={styles.modalLabel} variant="caption">
                  Command
                </Text>
                <TextInput
                  label="On Press"
                  value={
                    elementsOnPress[currentElementId] === undefined
                      ? currentElement?.command.onPress || ''
                      : elementsOnPress[currentElementId]
                  }
                  onChangeText={(t) => {
                    updateElementsOnPress({
                      [currentElementId]: t,
                    });
                  }}
                  containerStyle={styles.modalTextInput}
                />
                <TextInput
                  label="On Release"
                  value={
                    elementsOnRelease[currentElementId] === undefined
                      ? currentElement?.command.onRelease || ''
                      : elementsOnRelease[currentElementId]
                  }
                  onChangeText={(t) => {
                    updateElementsOnRelease({
                      [currentElementId]: t,
                    });
                  }}
                  containerStyle={styles.modalTextInput}
                />
              </View>
            </Modal>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.headerAction}
                activeOpacity={0.6}
                onPress={() => setShowEditLayout(false)}>
                <Close width={32} height={32} />
              </TouchableOpacity>
              <View style={styles.layoutActions}>
                <TouchableOpacity
                  style={styles.headerAction}
                  activeOpacity={0.6}
                  onPress={() => addElement()}>
                  <Add width={32} height={32} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.elements}>
              {elements.map((element) => (
                <DraggableControl
                  {...element}
                  key={element.id}
                  onUpdate={saveElementPosition}
                  onClick={setCurrentElementId}
                  label={
                    elementLabels[element.id] === undefined
                      ? element?.label || ''
                      : elementLabels[element.id]
                  }
                  size={elementSizes[element.id] || element.size || 80}
                />
              ))}
            </View>
          </>
        ) : (
          <>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.headerAction}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}>
                <Back width={32} height={32} />
              </TouchableOpacity>
              <Text
                containerStyle={styles.headerTitleContainer}
                style={styles.headerTitle}
                variant="title">
                Controller Details
              </Text>
              {showDeleteAction && (
                <TouchableOpacity
                  style={styles.headerAction}
                  activeOpacity={0.6}
                  onPress={() => {
                    Alert.alert(
                      'Delete Controller',
                      `Are you sure you want to delete ${label}?`,
                      [
                        {
                          text: 'Cancel',
                          onPress: () => {},
                          style: 'cancel',
                        },
                        {
                          text: 'Delete',
                          style: 'destructive',
                          onPress: () => {
                            deleteController(id);
                            navigation.goBack();
                          },
                        },
                      ],
                      {
                        cancelable: true,
                      },
                    );
                  }}>
                  <Delete width={32} height={32} fill={'#000'} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.content}>
              <TextInput
                containerStyle={styles.inputContainer}
                label="Name"
                value={label}
                onChangeText={setLabel}
              />
            </View>
            <View style={styles.action}>
              <Button
                containerStyle={styles.secondaryActionButton}
                label={'Edit Layout'}
                onPress={() => setShowEditLayout(true)}
                outline
              />
              <Button
                label={'Save Controller'}
                onPress={() => {
                  saveController({
                    id,
                    label,
                    elements: propertiesToSaveElementData(
                      elements,
                      elementLabels,
                      elementSizes,
                      elementsOnPress,
                      elementsOnRelease,
                    ),
                  });
                  navigation.goBack();
                }}
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default ControlEditView;
