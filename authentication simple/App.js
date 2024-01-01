import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen'
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';


export default function App() {
  return (
    <View style={styles.container}>

      {/**  
        <SignInScreen />
        <SignUpScreen />
        <ConfirmEmailScreen />
        <ForgotPasswordScreen />
      */}
      <NewPasswordScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#F9FBFC',
    paddingTop: Constants.statusBarHeight,
  },
});
