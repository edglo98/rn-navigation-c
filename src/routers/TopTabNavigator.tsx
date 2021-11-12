import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  const {top} = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      style={{marginTop: top}}
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={{
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
        tabBarStyle: {elevation: 0, shadowColor: 'transparent'},
      }}>
      <TopTab.Screen
        name="ChatScreen"
        options={{
          title: 'Chat',
          tabBarIcon: ({color}) => (
            <Icon name="chatbox-ellipses-outline" size={20} color={color} />
          ),
        }}
        component={ChatScreen}
      />
      <TopTab.Screen
        name="ContactsScreen"
        options={{
          title: 'Contactos',
          tabBarIcon: ({color}) => (
            <Icon name="people-outline" size={20} color={color} />
          ),
        }}
        component={ContactsScreen}
      />
      <TopTab.Screen
        name="AlbumsScreen"
        options={{
          title: 'Album',
          tabBarIcon: ({color}) => (
            <Icon name="albums-outline" size={20} color={color} />
          ),
        }}
        component={AlbumsScreen}
      />
    </TopTab.Navigator>
  );
};

export default TopTabNavigation;
