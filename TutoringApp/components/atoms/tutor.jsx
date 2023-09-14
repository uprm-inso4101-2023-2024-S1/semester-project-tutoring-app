import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Tutor = ({ name, course, rating }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.course}>{course}</Text>
    <Text style={styles.rating}>{rating}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  course: {
    fontSize: 16,
  },
  rating: {
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default Tutor;
