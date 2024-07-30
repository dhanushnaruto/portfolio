import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  palette: {
    background: {
      default: '#ffffff',
      paper: '#f0f0f0',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
    primary: {
      main: '#6200ee',
      dark: '#3700b3',
    },
  },
};

const darkTheme = {
  palette: {
    background: {
      default: '#121212',
      paper: '#1f1f1f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
    primary: {
      main: '#bb86fc',
      dark: '#3700b3',
    },
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
