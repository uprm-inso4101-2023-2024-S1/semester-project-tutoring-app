import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import Department from "../atoms/Department";

/**
 * Component that displays a list of results or a message when no results are found.
 *
 * @param {Array} searchResults - The list of search results.
 * @param {string} noResultMessage - The message to display when no results are found.
 * @returns {JSX.Element} The rendered ServiceContent component.
 */
const ServiceContent = ({ searchResults }) => {
  const noResultMessage = "No results found. Please try a different keyword.";

  return (
    <View style={styles.contentList}>
      {searchResults.length === 0 ? (
        <Text style={styles.noResult}>{noResultMessage}</Text>
      ) : (
        searchResults.map((result, index) => (
          <Department
            key={index}
            departmentName={result.name}
            courseData={result.courseData}
          ></Department>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentList: {
    marginTop: SIZES.medium,
  },
  noResult: {
    fontSize: SIZES.medium,
    color: COLORS.text,
  },
});

export default ServiceContent;
