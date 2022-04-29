import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={styles.screens}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screens: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
});

export default Screen;
