import React from 'react';
import { ScrollView, View, StatusBar, Linking } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Text from 'components/base/Text';
import useStyles from './Settings.style';
import { SettingsProps } from './Settings.props';
import SettingItem from 'components/module/SettingItem';
import { useState } from 'react';
import { COLORS } from 'theme';
import SelectModal from 'components/module/SelectModal';
import { THEME_OPTION } from 'store/settings';

const PROJECT_URL = 'https://github.com/jerameel/bacon';
const THEME_OPTIONS: THEME_OPTION[] = ['Light', 'Dark'];

const SettingsScreen = (props: SettingsProps) => {
  const { settings, selectTheme } = props;
  const { styles, selectedTheme } = useStyles();
  const [showThemePicker, setShowThemePicker] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS[selectedTheme].BACKGROUND}
        barStyle={selectedTheme === 'Dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle} variant="title">
            Settings
          </Text>
        </View>
        <View style={styles.content}>
          <ScrollView style={styles.contentScroll}>
            <SettingItem
              key={'Theme'}
              label="Theme"
              description={selectedTheme}
              onPress={() => setShowThemePicker(true)}
              containerStyle={styles.settingItem}
              theme={selectedTheme}
            />
            <SettingItem
              key={'Source Code'}
              label="Source Code"
              description={PROJECT_URL}
              onPress={async () => {
                const supported = await Linking.canOpenURL(PROJECT_URL);
                if (supported) {
                  await Linking.openURL(PROJECT_URL);
                }
              }}
              containerStyle={styles.settingItem}
              theme={selectedTheme}
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
        theme={selectedTheme}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
