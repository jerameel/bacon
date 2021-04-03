import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

import Text from 'components/base/Text';
import styles from './Connect.style';
import { ConnectProps } from './Connect.props';
import { Back, Bluetooth } from 'components/base/SVG';
import Button from 'components/base/Button';

const ConnectView = (props: ConnectProps) => {
  const { navigation, route, connecting, connected } = props;

  const id = route.params.id || '';
  const name = route.params.name || '';

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
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
            Connect
          </Text>
        </View>
        {connecting && (
          <View style={styles.loadingContent}>
            <ActivityIndicator color="#0050B3" size="large" />
            <Text
              style={styles.loadingText}
              containerStyle={styles.loadingTextContainer}
              variant="caption">
              Establishing connection to
            </Text>
            <Text
              style={styles.nameText}
              containerStyle={styles.nameTextContainer}
              variant="body">
              {name && name !== 'Unknown Device' ? name : id}
            </Text>
          </View>
        )}

        {connected && (
          <View style={styles.loadingContent}>
            <Bluetooth fill="#0050B3" width={48} height={48} />
            <Text
              style={styles.loadingText}
              containerStyle={styles.loadingTextContainer}
              variant="caption">
              Connected To
            </Text>
            <Text
              style={styles.nameText}
              containerStyle={styles.nameTextContainer}
              variant="body">
              {name && name !== 'Unknown Device' ? name : id}
            </Text>
          </View>
        )}

        <View style={styles.action}>
          {connected && (
            <Button
              containerStyle={styles.secondaryActionButton}
              label={'Next'}
              onPress={() => {}}
            />
          )}
          <Button
            outline
            label={connected ? 'Disconnect' : 'Cancel'}
            onPress={() => {}}
          />
        </View>
      </View>
    </>
  );
};

export default ConnectView;
