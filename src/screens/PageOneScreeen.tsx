import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from '../theme/theme';

interface Props extends StackScreenProps<any, any> {}

const PageOneScreeen = ({navigation}: Props) => {
  return (
    <View style={theme.screen}>
      <Text style={theme.title}>pagina una</Text>

      <Button
        title="ir a pagina 2"
        onPress={() => navigation.navigate('PageTwoScreeen')}
      />

      <Text>Usuarios:</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('UserScreen', {
            id: 1,
            name: 'Edgar',
          })
        }>
        <Text>Edgar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageOneScreeen;
