import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PageOneScreeen from '../screens/PageOneScreeen';
import PageThreeScreeen from '../screens/PageThreeScreen';
import PageTwoScreeen from '../screens/PageTwoScreen';

const Stack = createStackNavigator();

const StackOneNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PageOneScreeen" component={PageOneScreeen} />
      <Stack.Screen name="PageTwoScreeen" component={PageTwoScreeen} />
      <Stack.Screen name="PageThreeScreeen" component={PageThreeScreeen} />
    </Stack.Navigator>
  );
};

export default StackOneNavigation;
