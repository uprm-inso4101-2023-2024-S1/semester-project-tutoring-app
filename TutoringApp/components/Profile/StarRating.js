import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text
        key={i}
        style={[styles.star, { color: i <= rating ? "#FFD700" : "#C0C0C0" }]}
      >
        ★
      </Text>
    );
  }

  return <View style={styles.starRating}>{stars}</View>;
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: "row",
  },
  star: {
    fontSize: 20,
  },
});

export default StarRating;
