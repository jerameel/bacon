import React from 'react';
import {
  ScrollView,
  View,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Text from 'components/base/Text';
import styles from './Settings.style';
import { SettingsProps } from './Settings.props';
import SettingItem from 'components/module/SettingItem';
import { useState } from 'react';
import { COLORS } from 'theme';
import SelectModal from 'components/module/SelectModal';
import { THEME_OPTION } from 'store/settings';

const THEME_OPTIONS: THEME_OPTION[] = ['Light', 'Dark'];

const SettingsScreen = (props: SettingsProps) => {
  const { settings, selectTheme } = props;
  const [showThemePicker, setShowThemePicker] = useState(false);

  const { selectedTheme } = settings;
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Settings
          </Text>
        </View>
        <View style={styles.content}>
          <ScrollView style={styles.contentScroll}>
            <SettingItem
              label="Theme"
              description={selectedTheme}
              onPress={() => setShowThemePicker(true)}
              containerStyle={styles.settingItem}
            />
            <SettingItem
              label="Source Code"
              description="https://github.com/jerameel/bacon"
              onPress={() => {}}
              containerStyle={styles.settingItem}
            />
          </ScrollView>
        </View>
      </View>
      <SelectModal
        title="Select Theme"
        visible={showThemePicker}
        onSelect={(v) => {
          // @ts-ignore
          selectTheme(v);
          setShowThemePicker(false);
        }}
        selectedValue={selectedTheme}
        options={THEME_OPTIONS.map((a) => ({
          label: a,
          value: a,
        }))}
      />
    </>
  );
};

export default SettingsScreen;
