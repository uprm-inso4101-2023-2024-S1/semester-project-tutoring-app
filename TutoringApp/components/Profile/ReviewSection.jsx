import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StarRating from "./StarRating";
import { COLORS } from "../../constants/theme";
const ReviewSection = ({ ratings }) => {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewTitle}>Ratings</Text>
      {ratings.map((rating, index) => (
        <View key={index} style={styles.reviewItem}>
          <StarRating rating={rating.rating} />
          <Text style={styles.reviewAuthor}>Author: {rating.author}</Text>
          <Text style={styles.reviewText}>{rating.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
    padding: 16,
    borderRadius: 10,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  reviewItem: {
    backgroundColor: COLORS.secondary,
    padding: 12,
    margin: 8,
    borderRadius: 8,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  reviewText: {
    color: "#fff",
  },
});

export default ReviewSection;
