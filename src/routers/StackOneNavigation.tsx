import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageOneScreeen from '../screens/PageOneScreeen';
import PageThreeScreeen from '../screens/PageThreeScreen';
import PageTwoScreeen from '../screens/PageTwoScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createStackNavigator();

const StackOneNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="PageOneScreeen"
      screenOptions={{
        headerStyle: {
          elevation: 0, // android
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="PageOneScreeen"
        options={{title: 'Página 1'}}
        component={PageOneScreeen}
      />
      <Stack.Screen
        name="PageTwoScreeen"
        options={{title: 'Página 2'}}
        component={PageTwoScreeen}
      />
      <Stack.Screen
        name="PageThreeScreeen"
        options={{title: 'Página 3'}}
        component={PageThreeScreeen}
      />
      <Stack.Screen
        name="UserScreen"
        options={{title: 'Perfil'}}
        component={UserScreen}
      />
    </Stack.Navigator>
  );
};

export default StackOneNavigation;
