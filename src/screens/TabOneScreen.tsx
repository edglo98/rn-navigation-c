import React from 'react';
import {View, Text} from 'react-native';
import theme from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TabOneScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...theme.screen, marginTop: top}}>
      <Text style={theme.title}>Icons</Text>
      <Icon name="rocket-outline" size={60} color="red" />
      <Icon name="rose-outline" size={60} color="red" />
      <Icon name="battery-charging-outline" size={60} color="red" />
      <Icon name="skull-outline" size={60} color="red" />
      <Icon name="fitness-outline" size={60} color="red" />
      <Icon name="finger-print-outline" size={60} color="red" />
    </View>
  );
};

export default TabOneScreen;
