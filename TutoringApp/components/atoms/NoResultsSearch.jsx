import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoResultsSearch = () => {
  return (
    <View style={styles.container}>
      <Text>No results found. Please try a different keyword.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default NoResultsSearch;
