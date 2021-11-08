import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from '../theme/theme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const PageOneScreeen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Text>🍔</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

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

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('UserScreen', {
            id: 1,
            name: 'Luz',
          })
        }>
        <Text>Luz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageOneScreeen;
