import React, { useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';

import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {theme: {colors}} = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />

            <TextInput
              style={{...stylesScreen.inputStyle, color: colors.text, borderColor: colors.border}}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />

            <TextInput
              style={{...stylesScreen.inputStyle, color: colors.text, borderColor: colors.border}}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />

            <View style={stylesScreen.switchRow}>
              <Text style={{...stylesScreen.switchText, color: colors.text}}>Suscribirse:</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.border,
              }}
              placeholder="Ingrese su teléfono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />

            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
