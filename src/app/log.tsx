import { Text, View, StyleSheet } from "react-native";

export default function Log() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Log</Text>
      <Text>Daily log entries will go here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, backgroundColor: "#F1F4F3" },
  title: { fontSize: 28, fontWeight: "600", marginBottom: 8 },
});