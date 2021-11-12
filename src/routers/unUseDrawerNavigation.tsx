import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackOneNavigation from './StackOneNavigation';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigation"
        options={{title: 'Home'}}
        component={StackOneNavigation}
      />
      <Drawer.Screen
        name="SettingsScree"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
