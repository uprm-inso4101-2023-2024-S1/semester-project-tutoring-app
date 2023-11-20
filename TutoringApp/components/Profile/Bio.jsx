import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const Bio = ({ user }) => {
  const { tags } = user;

  return (
    <View style={styles.container}>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tag: {
    backgroundColor: COLORS.white,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 12,
    color: COLORS.text,
  },
});

export default Bio;
