import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import theme from '../theme/theme';

interface User {
  id: number;
  name: string;
}

interface Props extends StackScreenProps<any, any> {}

const UserScreen = ({route, navigation}: Props) => {
  const {params} = route;

  useEffect(() => {
    navigation.setOptions({
      // headerBackTitle: '',
      title: params!.name,
    });
  }, [navigation, params]);

  return (
    <View style={theme.screen}>
      <Text style={theme.title}>Perfil</Text>
    </View>
  );
};

export default UserScreen;
