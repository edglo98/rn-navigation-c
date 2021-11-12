import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TabOneScreen from '../screens/TabOneScreen';
import StackOneNavigation from './StackOneNavigation';
import theme, {colors} from '../theme/theme';
import {Platform, Text} from 'react-native';
import TopTabNavigation from './TopTabNavigator';

export const BottomTabs = () => {
  return Platform.OS === 'ios' ? <BottomTabsIOS /> : <BottomTabsANDROID />;
};

const TabsADROID = createMaterialBottomTabNavigator();

const BottomTabsANDROID = () => {
  return (
    <TabsADROID.Navigator sceneAnimationEnabled={true}>
      <TabIOS.Screen
        name="TabOneScreen"
        options={{
          title: 'Tab 1',
          tabBarIcon: props => (
            <Text style={props.focused ? theme.iconSelected : null}>Icon</Text>
          ),
        }}
        component={TabOneScreen}
      />
      <TabIOS.Screen
        name="TopTabNavigation"
        options={{
          title: 'Tab 2',
          tabBarIcon: props => (
            <Text style={props.focused ? theme.iconSelected : null}>Icon</Text>
          ),
        }}
        component={TopTabNavigation}
      />
      <TabIOS.Screen
        name="StackOneNavigation"
        options={{
          title: 'Stack',
          tabBarIcon: props => (
            <Text style={props.focused ? theme.iconSelected : null}>Icon</Text>
          ),
        }}
        component={StackOneNavigation}
      />
    </TabsADROID.Navigator>
  );
};

const TabIOS = createBottomTabNavigator();

const BottomTabsIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      <TabIOS.Screen
        name="TabOneScreen"
        options={{
          title: 'Tab 1',
          tabBarIcon: props => (
            <Text style={props.focused ? theme.iconSelected : null}>Icon</Text>
          ),
        }}
        component={TabOneScreen}
      />
      <TabIOS.Screen
        name="TopTabNavigation"
        options={{
          title: 'Tab 2',
          tabBarIcon: props => (
            <Text style={props.focused ? theme.iconSelected : null}>Icon</Text>
          ),
        }}
        component={TopTabNavigation}
      />
      <TabIOS.Screen
        name="StackOneNavigation"
        options={{
          title: 'Stack',
          tabBarIcon: props => (
            <Text style={props.focused ? theme.iconSelected : null}>Icon</Text>
          ),
        }}
        component={StackOneNavigation}
      />
    </TabIOS.Navigator>
  );
};

export default BottomTabs;
