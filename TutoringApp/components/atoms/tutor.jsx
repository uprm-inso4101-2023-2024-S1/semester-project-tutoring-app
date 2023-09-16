import React from "react";
import { StyleSheet, Text, View } from "react-native";

function getRatingEmoji(rating) {
  const maxRating = "⭐⭐⭐⭐⭐";
  let boundedRate;
  if (rating < 0) {
    boundedRate = 0;
  } else if (rating > maxRating.length) {
    boundedRate = maxRating.length;
  } else {
    boundedRate = rating;
  }
  return maxRating.substring(0, boundedRate);
}

const Tutor = ({ name, course, rating }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.course}>{course}</Text>
    <Text style={styles.rating}>{getRatingEmoji(rating)}</Text>
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
