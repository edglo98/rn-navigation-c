import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import theme from '../theme/theme';

interface Props extends StackScreenProps<any, any> {}

const PageThreeScreeen = ({navigation}: Props) => {
  return (
    <View style={theme.screen}>
      <Text style={theme.title}>pagina tres</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Regresar" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default PageThreeScreeen;
