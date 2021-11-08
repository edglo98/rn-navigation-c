import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackOneNavigation from './StackOneNavigation';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigationPro = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuDrawer {...props} />}>
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

export default DrawerNavigationPro;

const MenuDrawer = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={classes.drawerContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }}
          style={classes.imgAvatar}
        />

        <Pressable onPress={() => navigation.navigate('StackNavigation')}>
          <Text style={classes.navigatorTittle}>Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SettingsScree')}>
          <Text style={classes.navigatorTittle}>Settings</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

const classes = StyleSheet.create({
  imgAvatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginTop: 20,
    marginBottom: 20,
  },
  drawerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigatorTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
