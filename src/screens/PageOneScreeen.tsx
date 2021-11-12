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
          style={theme.hamburguerMenu}
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
      <Text style={theme.title}>Pagina una</Text>

      <Button
        title="ir a pagina 2"
        onPress={() => navigation.navigate('PageTwoScreeen')}
      />

      <Text>Usuarios:</Text>

      <View style={theme.gridContainer}>
        <TouchableOpacity
          style={theme.userCard}
          onPress={() =>
            navigation.navigate('UserScreen', {
              id: 1,
              name: 'Edgar',
            })
          }>
          <Text>Edgar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={theme.userCard}
          onPress={() =>
            navigation.navigate('UserScreen', {
              id: 1,
              name: 'Fernando',
            })
          }>
          <Text>Fernando</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageOneScreeen;
