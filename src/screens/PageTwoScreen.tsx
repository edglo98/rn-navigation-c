import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import theme from '../theme/theme';

const PageTwoScreeen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerBackTitle: '',
    });
  }, [navigator]);

  return (
    <View style={theme.screen}>
      <Text style={theme.title}>pagina dos</Text>

      <Button
        title="ir a pagina tres"
        onPress={() => navigator.navigate('PageThreeScreeen' as never)}
      />
      <Button
        title="ir a pagina tres"
        onPress={() => navigator.navigate('PageThreeScreeen' as never)}
      />
    </View>
  );
};

export default PageTwoScreeen;
