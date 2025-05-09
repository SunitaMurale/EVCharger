import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ChargerMap from "./components/ChargerMap";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChargerMap />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
