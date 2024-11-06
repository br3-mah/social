import React from 'react';
import { ThemeProvider as RNPThemeProvider } from 'react-native-paper';
import { colors } from '../styles/colors';

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: colors.primary,
      background: colors.background,
      surface: colors.secondary,
      text: colors.text,
    },
  };

  return <RNPThemeProvider theme={theme}>{children}</RNPThemeProvider>;
};
