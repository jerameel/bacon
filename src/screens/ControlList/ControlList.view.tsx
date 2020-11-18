import React from 'react';
import { View, StatusBar } from 'react-native';
import Text from 'components/base/Text';
import styles from './ControlList.style';
import { ControlListProps } from './ControlList.props';

const ControlListScreen = (props: ControlListProps) => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Controls
          </Text>
        </View>
      </View>
    </>
  );
};

export default ControlListScreen;
