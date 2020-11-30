import React from 'react';
import { View, StatusBar } from 'react-native';
import Text from 'components/base/Text';
import styles from './Settings.style';
import { SettingsProps } from './Settings.props';

const SettingsScreen = (props: SettingsProps) => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Settings
          </Text>
        </View>
      </View>
    </>
  );
};

export default SettingsScreen;
