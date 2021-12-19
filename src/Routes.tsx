import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/Home';
import ControlListScreen from 'screens/ControlList';
import ControlEditScreen from 'screens/ControlEdit';
import SettingsScreen from 'screens/Settings';
import { MainTabParamList, MainStackParamList } from 'types/Route';
import { Control, Device, Settings } from 'components/base/SVG';
import { SVGProps } from 'components/base/SVG/SVG.props';
import { COLORS } from 'theme';
import ConnectScreen from 'screens/Connect';
import ConnectedControllerScreen from 'screens/ConnectedController';
import ConnectedMonitorScreen from 'screens/ConnectedMonitor';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const MainTab = createBottomTabNavigator<MainTabParamList>();

const createTabIcon =
  (Component: (props: SVGProps) => JSX.Element, sizeOverride?: number) =>
  ({ color }: { focused: boolean; color: string; size: number }) => {
    return (
      <Component
        fill={color}
        width={sizeOverride || 32}
        height={sizeOverride || 32}
      />
    );
  };

const MainTabNavigator = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const { selectedTheme } = settings;
  return (
    <MainTab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: COLORS[selectedTheme].PRIMARY,
        inactiveTintColor: COLORS[selectedTheme].SECONDARY_TEXT,
        style: {
          height: 70,
          borderTopWidth: 0,
          borderTopColor: COLORS[selectedTheme].BACKGROUND,
          backgroundColor: COLORS[selectedTheme].BACKGROUND,
          elevation: 0,
        },
      }}>
      <MainTab.Screen
        name="HOME"
        options={{
          title: 'Home',
          tabBarIcon: createTabIcon(Device, 40),
        }}
        component={HomeScreen}
      />
      <MainTab.Screen
        name="CONTROL_LIST"
        options={{ title: 'Controls', tabBarIcon: createTabIcon(Control) }}
        component={ControlListScreen}
      />
      <MainTab.Screen
        name="SETTINGS"
        options={{ title: 'Settings', tabBarIcon: createTabIcon(Settings) }}
        component={SettingsScreen}
      />
    </MainTab.Navigator>
  );
};

const MainStack = createStackNavigator<MainStackParamList>();

const Routes = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MainStack.Navigator initialRouteName="MAIN">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="MAIN"
        component={MainTabNavigator}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="CONTROL_EDIT"
        component={ControlEditScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="CONNECT"
        component={ConnectScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="CONNECTED_CONTROLLER"
        component={ConnectedControllerScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="CONNECTED_MONITOR"
        component={ConnectedMonitorScreen}
      />
    </MainStack.Navigator>
  );
};

export default Routes;
