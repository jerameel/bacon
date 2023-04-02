import React, {
  memo,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  StatusBar,
  TouchableOpacity,
  BackHandler,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
import Slider from 'react-native-slider';
import Draggable from 'react-native-draggable';
import { v1 as uuidv1 } from 'uuid';
import Text from 'components/base/Text';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import useStyles from './ControlEdit.style';
import { ControlEditProps } from './ControlEdit.props';
import {
  Add,
  Back,
  Close,
  Delete,
  Down,
  RightOutline,
} from 'components/base/SVG';
import { ControlElement } from 'store/controls';
import { propertiesToSaveElementData } from './ControlEdit.transform';
import { COLORS } from 'theme';
import AlertModal from 'components/module/AlertModal';
import { AlertModalProps } from 'components/module/AlertModal/AlertModal.props';
import ControlElementIcon from 'components/module/ControlElementIcon';
import { IconMapping } from 'components/module/ControlElementIcon/ControlElementIcon.constants';

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
        children={
          props.type !== 'TERMINAL' ? (
            <ControlElementIcon
              id={props.label || ''}
              size={props.size || 80}
            />
          ) : (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: props.width,
                height: props.height,
                borderColor: 'black',
                borderWidth: 1,
              }}
            />
          )
        }
      />
    );
  },
);

const ControlEditView = (props: ControlEditProps) => {
  const {
    controllers,
    saveController,
    duplicateController,
    deleteController,
    navigation,
    route,
  } = props;

  const { styles, selectedTheme } = useStyles();

  const id = route.params.id || '';
  const currentController = controllers.find(
    (controller) => controller.id === id,
  );

  const [alert, setAlert] = useState<null | AlertModalProps>(null);
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

  type ElementHeight = Record<string, number>;

  const [elementHeights, updateElementHeight] = useReducer(
    (state: ElementHeight, newState: ElementHeight) => {
      return {
        ...state,
        ...newState,
      };
    },
    {},
  );

  type ElementWidth = Record<string, number>;

  const [elementWidths, updateElementWidth] = useReducer(
    (state: ElementWidth, newState: ElementWidth) => {
      return {
        ...state,
        ...newState,
      };
    },
    {},
  );

  type ElementType = Record<string, 'BUTTON' | 'TERMINAL'>;

  const [elementTypes, updateElementType] = useReducer(
    (state: ElementType, newState: ElementType) => {
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
      label: 'default',
      x: windowWidth / 2 - 40,
      y: viewHeight / 2 - 40,
      width: 80,
      height: 80,
      size: 80,
      command: {
        onPress: '',
        onRelease: '',
      },
      type: 'BUTTON',
    };
    setElements((a) => {
      return [...a, newElement];
    });
  };

  const removeElement = (elementId: string) => {
    setElements((a) => {
      return a.filter((b) => b.id !== elementId);
    });
  };

  const convertElementToConsole = (elementId: string) => {
    setElements((a) => {
      var elementToConvert = a.find((x) => x.id === elementId);
      elementToConvert!.type = 'TERMINAL';
      return a;
    });
  };

  const convertElementToButton = (elementId: string) => {
    setElements((a) => {
      var elementToConvert = a.find((x) => x.id === elementId);
      elementToConvert!.type = 'BUTTON';
      return a;
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS[selectedTheme].BACKGROUND}
        barStyle={selectedTheme === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        {showEditLayout ? (
          <>
            <Modal
              animationType="slide"
              transparent
              visible={
                currentElementId.length > 0 &&
                elements.findIndex((a) => a.id === currentElementId) !== -1
              }
              onRequestClose={() => {
                setCurrentElementId('');
              }}>
              <View
                onTouchStart={() => setCurrentElementId('')}
                style={styles.modalClickableLayer}>
                <Down
                  width={32}
                  height={32}
                  fill={COLORS[selectedTheme].TITLE}
                />
              </View>
              <View style={styles.modalContentLayer}>
                <ScrollView>
                  {currentElement?.type !== 'TERMINAL' && (
                    <View style={styles.modalContentLayer}>
                      <Text
                        containerStyle={styles.modalLabelContainer}
                        style={styles.modalLabel}
                        variant="caption">
                        Icon
                      </Text>
                      <View style={styles.modalIconsContainer}>
                        {Object.keys(IconMapping).map((key) => (
                          <TouchableOpacity
                            key={key}
                            activeOpacity={0.6}
                            style={styles.modalIconButton}
                            onPress={() => {
                              updateElementLabel({
                                [currentElementId]: key,
                              });
                            }}>
                            <ControlElementIcon
                              id={key}
                              size={32}
                              isHighlighted={
                                key ===
                                (elementLabels[currentElementId] === undefined
                                  ? currentElement?.label || ''
                                  : elementLabels[currentElementId])
                              }
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  )}
                  {currentElement?.type !== 'TERMINAL' ? (
                    <View style={styles.modalContentLayer}>
                      <Text
                        containerStyle={styles.modalLabelContainer}
                        style={styles.modalLabel}
                        variant="caption">
                        {`Size (${(
                          (elementSizes[currentElementId] ||
                            currentElement?.size ||
                            80) / 80
                        ).toFixed(2)})`}
                      </Text>

                      <View style={styles.modalSliderContainer}>
                        <Slider
                          minimumTrackTintColor={COLORS[selectedTheme].PRIMARY}
                          maximumTrackTintColor={
                            COLORS[selectedTheme].AREA_HIGHLIGHT
                          }
                          thumbTintColor={COLORS.LIGHT.PRIMARY}
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
                    </View>
                  ) : (
                    <View style={styles.modalContentLayer}>
                      <Text
                        containerStyle={styles.modalLabelContainer}
                        style={styles.modalLabel}
                        variant="caption">
                        {`Height (${(
                          (elementHeights[currentElementId] ||
                            currentElement?.height ||
                            80) / 80
                        ).toFixed(2)})`}
                      </Text>
                      <View style={styles.modalSliderContainer}>
                        <Slider
                          minimumTrackTintColor={COLORS[selectedTheme].PRIMARY}
                          maximumTrackTintColor={
                            COLORS[selectedTheme].AREA_HIGHLIGHT
                          }
                          thumbTintColor={COLORS.LIGHT.PRIMARY}
                          minimumValue={32}
                          maximumValue={viewHeight}
                          value={
                            elementHeights[currentElementId] ||
                            currentElement?.height ||
                            80
                          }
                          onValueChange={(s) => {
                            updateElementHeight({
                              [currentElementId]: s,
                            });
                          }}
                          step={8}
                        />
                      </View>
                      <Text
                        containerStyle={styles.modalLabelContainer}
                        style={styles.modalLabel}
                        variant="caption">
                        {`Width (${(
                          (elementWidths[currentElementId] ||
                            currentElement?.width ||
                            80) / 80
                        ).toFixed(2)})`}
                      </Text>
                      <View style={styles.modalSliderContainer}>
                        <Slider
                          minimumTrackTintColor={COLORS[selectedTheme].PRIMARY}
                          maximumTrackTintColor={
                            COLORS[selectedTheme].AREA_HIGHLIGHT
                          }
                          thumbTintColor={COLORS.LIGHT.PRIMARY}
                          minimumValue={32}
                          maximumValue={windowWidth}
                          value={
                            elementWidths[currentElementId] ||
                            currentElement?.width ||
                            80
                          }
                          onValueChange={(s) => {
                            updateElementWidth({
                              [currentElementId]: s,
                            });
                          }}
                          step={8}
                        />
                      </View>
                    </View>
                  )}
                  {currentElement?.type !== 'TERMINAL' && (
                    <View style={styles.modalContentLayer}>
                      <Text
                        containerStyle={styles.modalLabelContainer}
                        style={styles.modalLabel}
                        variant="caption">
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
                        theme={selectedTheme}
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
                        theme={selectedTheme}
                      />
                    </View>
                  )}
                  {currentElement?.type !== 'TERMINAL' && (
                    <Button
                      containerStyle={styles.modalDeleteContainer}
                      label={'Convert to terminal'}
                      onPress={() => {
                        convertElementToConsole(currentElementId);
                        setCurrentElementId('');
                      }}
                      outline
                      theme={selectedTheme}
                    />
                  )}
                  {currentElement?.type === 'TERMINAL' && (
                    <Button
                      containerStyle={styles.modalDeleteContainer}
                      label={'Convert to button'}
                      onPress={() => {
                        convertElementToButton(currentElementId);
                        setCurrentElementId('');
                      }}
                      outline
                      theme={selectedTheme}
                    />
                  )}
                  <Button
                    containerStyle={styles.modalDeleteContainer}
                    label={'Delete'}
                    onPress={() => {
                      removeElement(currentElementId);
                    }}
                    outline
                    theme={selectedTheme}
                  />
                </ScrollView>
              </View>
            </Modal>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.headerAction}
                activeOpacity={0.6}
                onPress={() => setShowEditLayout(false)}>
                <Back
                  width={32}
                  height={32}
                  fill={COLORS[selectedTheme].TITLE}
                />
              </TouchableOpacity>
              <View style={styles.layoutActions}>
                <TouchableOpacity
                  style={styles.headerAction}
                  activeOpacity={0.6}
                  onPress={() => addElement()}>
                  <Add
                    width={32}
                    height={32}
                    fill={COLORS[selectedTheme].TITLE}
                  />
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
                  height={elementHeights[element.id] || element.height || 80}
                  width={elementWidths[element.id] || element.width || 80}
                  type={element.type}
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
                onPress={() => {
                  setAlert({
                    title: 'Discard Changes',
                    description:
                      'Are you sure you want to go back discard current changes?',
                    actions: [
                      {
                        label: 'Cancel',
                        onPress: () => {
                          setAlert(null);
                        },
                      },
                      {
                        label: 'Discard',
                        onPress: () => {
                          setAlert(null);
                          navigation.goBack();
                        },
                      },
                    ],
                  });
                }}>
                <Back
                  width={32}
                  height={32}
                  fill={COLORS[selectedTheme].TITLE}
                />
              </TouchableOpacity>
              <Text
                containerStyle={styles.headerTitleContainer}
                style={styles.headerTitle}
                variant="title">
                Controller Details
              </Text>
              {showDeleteAction && (
                <TouchableOpacity
                  style={[styles.headerAction, styles.deleteAction]}
                  activeOpacity={0.6}
                  onPress={() => {
                    setAlert({
                      title: 'Delete Controller',
                      description: `Are you sure you want to delete ${label}?`,
                      actions: [
                        {
                          label: 'Cancel',
                          onPress: () => {
                            setAlert(null);
                          },
                        },
                        {
                          label: 'Delete',
                          onPress: () => {
                            setAlert(null);
                            deleteController(id);
                            navigation.goBack();
                          },
                        },
                      ],
                    });
                  }}>
                  <Delete
                    width={21}
                    height={21}
                    fill={COLORS[selectedTheme].ERROR}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.content}>
              <TextInput
                containerStyle={styles.inputContainer}
                label="Name"
                value={label}
                onChangeText={setLabel}
                theme={selectedTheme}
              />
              <Button
                containerStyle={styles.editLayoutButton}
                label={'Edit Layout'}
                onPress={() => setShowEditLayout(true)}
                outline
                theme={selectedTheme}
              />
            </View>
            {(id || '').length > 0 && (
              <View style={styles.secondaryAction}>
                <Button
                  outline
                  label={'Create a Copy'}
                  onPress={() => {
                    duplicateController({
                      label,
                      elements: propertiesToSaveElementData(
                        elements,
                        elementLabels,
                        elementSizes,
                        elementHeights,
                        elementWidths,
                        elementTypes,
                        elementsOnPress,
                        elementsOnRelease,
                      ),
                    });
                    navigation.goBack();
                  }}
                  theme={selectedTheme}
                />
              </View>
            )}
            <View style={styles.primaryAction}>
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
                      elementHeights,
                      elementWidths,
                      elementTypes,
                      elementsOnPress,
                      elementsOnRelease,
                    ),
                  });
                  navigation.goBack();
                }}
                theme={selectedTheme}
              />
            </View>
          </>
        )}
      </View>
      <AlertModal
        theme={selectedTheme}
        {...(alert !== null ? alert : {})}
        visible={alert !== null}
      />
    </SafeAreaView>
  );
};

export default ControlEditView;
