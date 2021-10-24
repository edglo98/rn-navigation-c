import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackOneNavigation from './src/routers/StackOneNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackOneNavigation />
    </NavigationContainer>
  );
};

export default App;
