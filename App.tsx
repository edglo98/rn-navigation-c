import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigationPro from './src/routers/DrawerNavigationPro';
import AuthProvider from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNavigationPro />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
