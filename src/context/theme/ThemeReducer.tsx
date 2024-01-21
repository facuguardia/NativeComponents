import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'blue',
    background: 'white',
    card: 'lightgray',
    text: 'black',
    border: 'gray',
    notification: 'green',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255,0.7)',
  colors: {
    primary: 'orange',
    background: 'black',
    card: 'darkgray',
    text: 'white',
    border: 'gray',
    notification: 'green',
  },
};

export const ThemeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};

    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
