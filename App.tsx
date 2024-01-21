import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

const AppStore = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppStore>
      <Navigator />
    </AppStore>
  );
};

export default App;
