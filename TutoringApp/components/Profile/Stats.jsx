import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Stats = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{user.sessionsGiven}</Text>
        <Text style={styles.statLabel}>Sessions Given</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{user.reviews}</Text>
        <Text style={styles.statLabel}>Reviews</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{user.clients}</Text>
        <Text style={styles.statLabel}>Clients</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 16,
  },
});

export default Stats;
