import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigationPro from './src/routers/DrawerNavigationPro';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigationPro />
    </NavigationContainer>
  );
};

export default App;
