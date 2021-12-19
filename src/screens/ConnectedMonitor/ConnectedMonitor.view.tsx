import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import remove from 'ramda/src/remove';
import uniq from 'ramda/src/uniq';
import Text from 'components/base/Text';
import useStyles from './ConnectedMonitor.style';
import { ConnectedMonitorProps } from './ConnectedMonitor.props';
import { AccountTree, Back } from 'components/base/SVG';
import { COLORS } from 'theme';
import ControlElementIcon from 'components/module/ControlElementIcon';
import SelectModal from 'components/module/SelectModal';
import moment from 'moment';

const ConnectedMonitorView = (props: ConnectedMonitorProps) => {
  const {
    navigation,
    route,
    sendMessage,
    characteristics,
    selectCharacteristic,
    selectedCharacteristic,
    monitorLogs,
  } = props;

  const { styles, selectedTheme } = useStyles();

  const [message, setMessage] = useState('');

  const [showCharacteristicsModal, setShowCharacteristicsModal] =
    useState(false);
  const writeCharacteristics = characteristics.filter(
    (c) => c.properties.WriteWithoutResponse || c.properties.Write,
  );

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
        <View style={styles.content}>
          <ScrollView>
            {monitorLogs.map((log) => (
              <View key={log.createdAt} style={styles.logTextContainer}>
                <Text style={styles.logText} variant="body">
                  {log.type === 'INCOMING' || log.type === 'OUTGOING'
                    ? `${moment(log.createdAt).format()}
S: ${log.serviceUUID}
C: ${log.characteristicUUID}
>${log.message}`
                    : `${moment(log.createdAt).format()}
>${log.message}`}
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Enter Message..."
              returnKeyType="send"
              onSubmitEditing={() => {
                sendMessage(message);
                setMessage('');
              }}
            />
          </View>
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

export default ConnectedMonitorView;
