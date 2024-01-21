import React, { useContext } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {

  const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin }>
      <HeaderTitle title="Theme" />
    <View style={{ justifyContent: 'space-evenly', flexDirection: 'row'}}>

      <TouchableOpacity
        onPress={() => setDarkTheme()}
        activeOpacity={0.8}
        style={{
          width: 140,
          height: 40,
          backgroundColor: colors.primary,
          borderRadius: 20,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setLightTheme()}
        activeOpacity={0.8}
        style={{
          width: 140,
          height: 40,
          backgroundColor: colors.primary,
          borderRadius: 20,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>Ligth</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
