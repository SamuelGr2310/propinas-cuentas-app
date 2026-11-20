import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TipCalculatorScreen } from "./src/ui/TipCalculatorScreen";

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={appStyles.safeArea}>
      <StatusBar style="auto" />
      <TipCalculatorScreen />
    </SafeAreaView>
  );
}

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
