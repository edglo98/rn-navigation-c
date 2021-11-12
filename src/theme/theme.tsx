import {StyleSheet} from 'react-native';
export const colors = {
  black: '#282a2f',
  gray: '#8E8E93',
  white: '#fff',
  primary: '#ffb500',
  secondary: '#00a680',
  tertiary: '#00a680',
  quaternary: '#00a680',
};

const theme = StyleSheet.create({
  screen: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
  },
  userCard: {
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    backgroundColor: colors.primary,
    width: 120,
    height: 120,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  hamburguerMenu: {
    padding: 10,
  },
  iconSelected: {
    color: colors.primary,
  },
});

export default theme;
