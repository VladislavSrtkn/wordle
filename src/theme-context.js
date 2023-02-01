import React from 'react';

const themes = {
  light: {
    background: '#ffffff',
  },
  dark: {
    background: '#6b6b6b',
    color: '#ffffff',
  },
};

const ThemeContext = React.createContext({ theme: themes.light });

export { themes, ThemeContext };
