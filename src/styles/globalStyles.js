import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.text,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text,
  },
});
