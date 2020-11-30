import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/Home';
import ControlListScreen from 'screens/ControlList';
import SettingsScreen from 'screens/Settings';
import {
  HomeStackParamList,
  ControlListStackParamList,
  SettingsStackParamList,
  TabParamList,
} from 'types/Route';
import { Control, Device, Settings } from 'components/base/SVG';
import { SVGProps } from 'components/base/SVG/SVG.props';
import { COLORS } from 'theme';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HOME">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="HOME"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

const ControlStack = createStackNavigator<ControlListStackParamList>();

const ControlStackNavigator = () => {
  return (
    <ControlStack.Navigator initialRouteName="CONTROL_LIST">
      <ControlStack.Screen
        options={{ headerShown: false }}
        name="CONTROL_LIST"
        component={ControlListScreen}
      />
    </ControlStack.Navigator>
  );
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator initialRouteName="SETTINGS">
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="SETTINGS"
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<TabParamList>();

const createTabIcon = (
  Component: (props: SVGProps) => JSX.Element,
  sizeOverride?: number,
) => ({ color }: { focused: boolean; color: string; size: number }) => {
  return (
    <Component
      fill={color}
      width={sizeOverride || 32}
      height={sizeOverride || 32}
    />
  );
};

const Routes = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: COLORS.BLUE,
        inactiveTintColor: COLORS.BLACK,
        style: {
          height: 70,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HOME"
        options={{
          title: 'Home',
          tabBarIcon: createTabIcon(Device, 40),
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="CONTROL_LIST"
        options={{ title: 'Controls', tabBarIcon: createTabIcon(Control) }}
        component={ControlStackNavigator}
      />
      <Tab.Screen
        name="SETTINGS"
        options={{ title: 'Settings', tabBarIcon: createTabIcon(Settings) }}
        component={SettingsStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Routes;
