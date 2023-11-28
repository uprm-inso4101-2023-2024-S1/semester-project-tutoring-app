import React, { useState } from "react";
import { Surface, Searchbar } from "react-native-paper";
import Department from "../atoms/Department";
import { StyleSheet } from "react-native";
import NoResultsSearch from "../atoms/NoResultsSearch";
import { COLORS } from "../../constants/theme";

/**
 * Represents a search bar component.
 *
 * @param {object} props - The properties for the search bar component.
 * @param {Array} props.contentList - The content list from the API.
 * @returns {JSX.Element} A Surface component representing the search bar and filter content.
 */
const MySearchBar = ({ contentList }) => {
  let [searchText, setSearchText] = useState("");
  let [searchResults, setSearchResults] = useState(contentList);

  /**
   * Handles the search based on the given text.
   *
   * @param {string} text - The search text.
   */
  const handleSearch = (text) => {
    try {
      const currText = text.trim().toLowerCase();
      if (currText.length !== 0) {
        const data = contentList.filter((result) => {
          const deparmentMatch = result.name?.toLowerCase().includes(currText);
          const courseOrTutorMatch = result.courseData?.some(
            (course) =>
              course.name?.toLowerCase().includes(currText.toLowerCase()) ||
              course.tutors?.some((tutor) =>
                tutor.name?.toLowerCase().includes(currText.toLowerCase())
              )
          );

          return deparmentMatch || courseOrTutorMatch;
        });
        setSearchResults(data);
      } else {
        setSearchResults(contentList);
      }
    } catch (error) {
      console.error("An error occurred during the search", error);
    }
  };

  return (
    <Surface style={styles.surface}>
      <Searchbar
        placeholder="Search your course"
        placeholderTextColor={COLORS.text}
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch(text);
        }}
        value={searchText}
        style={styles.searchBar}
        iconColor={COLORS.primary}
        inputStyle={styles.input}
      />

      {searchResults.length === 0 ? (
        <NoResultsSearch />
      ) : (
        searchResults.map((result, index) => (
          <Department
            key={index}
            departmentName={result.name}
            courseData={result.courseData}
          />
        ))
      )}
    </Surface>
  );
};

/**
 * StyleSheet for styles used in the MySearchBar component.
 */
const styles = StyleSheet.create({
  surface: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "transparent",
    borderWidth: 0,
    position: "relative",
  },
  searchBar: {
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderColor: COLORS.gray,
    borderRadius: 25,
    paddingHorizontal: 5,
    width: "50%",
    marginHorizontal: "30%",
  },
  input: {
    color: COLORS.text,
    fontSize: 24,
  },
});

export default MySearchBar;