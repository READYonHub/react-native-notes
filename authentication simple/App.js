import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';


export default function App() {
  return (
    <View style={styles.container}>

      {/**  
        <SignInScreen />
        <SignUpScreen />
        <ConfirmEmailScreen />
        <ForgotPasswordScreen />
        <NewPasswordScreen />
      */}
      <Navigation />
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
