import  React, { createContext, useReducer } from "react";
import { ThemeReducer, ThemeState, lightTheme } from "./ThemeReducer";

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

  const [theme, dispatch] = useReducer(ThemeReducer, lightTheme);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('Dark Mode');
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('Light Mode');
  };


  return (
    <ThemeContext.Provider
      value={
        {
          theme,
          setDarkTheme,
          setLightTheme
        }
      }>
      {children}
    </ThemeContext.Provider>
  );
}