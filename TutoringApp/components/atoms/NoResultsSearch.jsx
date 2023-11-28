import { View, Text, StyleSheet } from "react-native";
/**
 * A component that represents an edge case when no search results are found.
 *
 * @returns {JSX.Element} A View component with informative text.
 */
const NoResultsSearch = () => {
  return (
    <View style={styles.container}>
      <Text>No results found. Please try a different keyword.</Text>
    </View>
  );
};

/**
 * StyleSheet for styles used in the NoResultsSearch component.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default NoResultsSearch;