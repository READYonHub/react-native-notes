import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen'
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen />
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
