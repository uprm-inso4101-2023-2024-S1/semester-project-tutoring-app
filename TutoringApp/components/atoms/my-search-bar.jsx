import React, { useState } from "react";
import { Surface, Searchbar } from "react-native-paper";
import DepartmentComponent from "./DepartmentComponent";

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
    <Surface>
      <Searchbar
        placeholder="Search..."
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch(text);
        }}
        value={searchText}
      />

      {searchResults.map((result, index) => (
        <DepartmentComponent
          key={index}
          departmentName={result.name}
          courseData={result.courseData}
        />
      ))}
    </Surface>
  );
};

export default MySearchBar;
