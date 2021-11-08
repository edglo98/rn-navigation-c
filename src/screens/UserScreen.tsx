import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../routers/StackOneNavigation';
import theme from '../theme/theme';

interface User {
  id: number;
  name: string;
}

interface Props extends StackScreenProps<RootStackParams, 'UserScreen'> {}

const UserScreen = ({route, navigation}: Props) => {
  const {params} = route;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  return (
    <View style={theme.screen}>
      <Text style={theme.title}>Perfil</Text>
    </View>
  );
};

export default UserScreen;
