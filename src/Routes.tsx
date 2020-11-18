import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/Home';
import { HomeStackParamList, ControlStackParamList } from 'types/Route';
import ControlListScreen from 'screens/ControlList';

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

const ControlStack = createStackNavigator<ControlStackParamList>();

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

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME"
        options={{ title: 'Home' }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="CONTROL_LIST"
        options={{ title: 'Controls' }}
        component={ControlStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Routes;
