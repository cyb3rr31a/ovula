import { useState } from "react";
import { Pressable, ScrollView, Text, View, StyleSheet } from "react-native";

const DAY_MS = 24 * 60 * 60 * 1000; // milliseconds in a day

function daysBetween(from: Date, to: Date) {
  const a = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const b = new Date(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b.getTime() - a.getTime()) / DAY_MS);
}

export default function Home() {
  const today = new Date();

  // Months count from 0, so 8 = September
  const [lastPeriod, setLastPeriod] = useState(new Date(2026, 8, 26));
  const cycleDay =  daysBetween(lastPeriod, today) + 1;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.date}>
        {today.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long"})}
      </Text>
      <View style={styles.card}>
        <Text style={styles.label}>CYCLE DAY</Text>
        <Text style={styles.bigNumber}>{cycleDay}</Text>
        <Text style={styles.muted}>
          Period started {lastPeriod.toLocaleDateString("en-GB", { day: "numeric", month: "short"})}
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
        onPress={() => setLastPeriod(new Date())}
      >
        <Text style={styles.buttonText}>My period started today</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F1F4F3" },
  content: { padding: 16, gap: 16 },
  date: { fontSize: 16, color: "#59665F" },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D3DCD9",
    padding: 24,
    alignItems: "center",
  },
  label: { fontSize: 12, fontWeight: "600", letterSpacing: 1.5, color: "#59665F" },
  bigNumber: { fontSize: 72, fontWeight: "300", color: "#16201E" },
  muted: { fontSize: 14, color: "#59665F" },
  button: {
    backgroundColor: "#A3285A",
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
});