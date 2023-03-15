import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalProvider, useGlobal } from "./src/hooks/useGlobal";

export default function App() {
  return (
    <GlobalProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <CompA />
        <CompB />
      </View>
    </GlobalProvider>
  );
}

const CompA = () => {
  const { quantity, decrement } = useGlobal();

  return (
    <View>
      <Text>Sidebar is open: {quantity}</Text>
      <Text>CompA</Text>
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const CompB = () => {
  const { quantity, increment } = useGlobal();
  return (
    <View>
      <Text>Sidebar is open: {quantity}</Text>
      <Text>CompB</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
