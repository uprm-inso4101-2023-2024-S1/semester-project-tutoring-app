import React, { useState } from "react";
import { Surface, Searchbar } from "react-native-paper";
import DepartmentComponent from "./DepartmentComponent";
import { StyleSheet } from "react-native";
import NoResultsSearch from "./NoResultsSearch";

const MySearchBar = ({ contentList }) => {
  let [searchText, setSearchText] = useState("");
  let [searchResults, setSearchResults] = useState(contentList);

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
        placeholder="Search..."
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch(text);
        }}
        value={searchText}
      />

      {searchResults.length === 0 ? (
        <NoResultsSearch />
      ) : (
        searchResults.map((result, index) => (
          <DepartmentComponent
            key={index}
            departmentName={result.name}
            courseData={result.courseData}
          />
        ))
      )}
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    padding: 16,
  },
});

export default MySearchBar;
