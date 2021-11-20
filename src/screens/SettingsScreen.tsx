import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useAuth from '../hooks/useAuth';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const {authState, actions} = useAuth();

  return (
    <View style={{marginTop: insets.top}}>
      <Text>setting screen</Text>
      {authState.isAuthenticated ? (
        <Button onPress={actions.logout} title="Logout" />
      ) : (
        <Button onPress={actions.signIn} title="Login" />
      )}
      <Text>{JSON.stringify(authState)}</Text>
    </View>
  );
};

export default SettingsScreen;
