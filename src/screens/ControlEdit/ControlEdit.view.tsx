import React, { useState } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import Text from 'components/base/Text';
import TextInput from 'components/base/TextInput';
import Button from 'components/base/Button';
import styles from './ControlEdit.style';
import { ControlEditProps } from './ControlEdit.props';
import { Back, Delete } from 'components/base/SVG';

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

  const [step, setStep] = useState(0);
  const [label, setLabel] = useState(currentController?.label || '');

  const steps = [
    {
      title: 'Controller Details',
      actionLabel: 'Next',
      action: () => setStep(1),
      backAction: () => navigation.goBack(),
    },
    {
      title: 'Controller Layout',
      actionLabel: 'Save Controller',
      action: () => {
        saveController({ id, label });
        navigation.goBack();
      },
      backAction: () => setStep(0),
    },
  ];

  const showDeleteAction = id.length > 0 && step === 0;
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerAction}
            activeOpacity={0.6}
            onPress={steps[step].backAction}>
            <Back width={32} height={32} />
          </TouchableOpacity>
          <Text
            containerStyle={styles.headerTitleContainer}
            style={styles.headerTitle}
            variant="title">
            {steps[step].title}
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
          {step === 0 && (
            <>
              <TextInput
                containerStyle={styles.inputContainer}
                label="Name"
                value={label}
                onChangeText={setLabel}
              />
            </>
          )}
        </View>
        <View style={styles.action}>
          <Button
            label={steps[step].actionLabel}
            onPress={steps[step].action}
          />
        </View>
      </View>
    </>
  );
};

export default ControlEditView;
