import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen'


export default function App() {
  return (
    <View style={styles.container}>
    
    {/**  
        <SignInScreen />
      */}
        <SignUpScreen />
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
