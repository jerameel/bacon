import React from 'react';
import { View, StatusBar } from 'react-native';
import Text from 'components/base/Text';
import styles from './Home.style';
import { HomeProps } from './Home.props';

const HomeScreen = (props: HomeProps) => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Home
          </Text>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
