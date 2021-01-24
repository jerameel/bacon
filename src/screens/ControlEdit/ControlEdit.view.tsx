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
} from 'react-native';
import Draggable from 'react-native-draggable';
import { v1 as uuidv1 } from 'uuid';
import Text from 'components/base/Text';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import styles from './ControlEdit.style';
import { ControlEditProps } from './ControlEdit.props';
import { Add, Back, Close, Delete } from 'components/base/SVG';
import { ControlElement } from 'store/controls';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const viewHeight = windowHeight - 100;

const DraggableControl = memo(
  (
    props: ControlElement & {
      onUpdate: (id: string, x: number, y: number) => void;
    },
  ) => {
    return (
      <Draggable
        x={props.x}
        y={props.y}
        renderText="X"
        renderColor={'black'}
        renderSize={32}
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

  const addElement = () => {
    const newElement: ControlElement = {
      id: uuidv1(),
      label: 'New Element',
      x: windowWidth / 2,
      y: viewHeight / 2,
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
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        {showEditLayout ? (
          <>
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
                  key={element.id}
                  {...element}
                  onUpdate={saveElementPosition}
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
                    deleteController(id);
                    navigation.goBack();
                  }}>
                  <Delete width={32} height={32} fill="#cf1322" />
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
                  saveController({ id, label, elements });
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
