import React, { useState } from "react";
import { Surface, Searchbar } from "react-native-paper";
import DepartmentComponent from "./DepartmentComponent";
import { COLORS, SHADOWS } from "../../constants/theme";

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
    // current styles are just examples of themes. Remove when desining begins
    <Surface
      style={{
        padding: 10,
        marginVertical: 20,
        backgroundColor: "transparent",
        borderWidth: 0,
        postion: "relative",
      }}
    >
      <Searchbar
        placeholder="Search your course"
        placeholderTextColor={COLORS.text}
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch(text);
        }}
        value={searchText}
        //This styles also
        style={{
          alignItems: "center",
          backgroundColor: COLORS.lightWhite,
          borderColor: COLORS.gray,
          borderRadius: 25,
          paddingHorizontal: 5,
          width: "100%",
          width: "45%",
          marginHorizontal: "30%",
        }}
        iconColor={COLORS.primary}
        inputStyle={{ color: COLORS.text, fontSize: 24 }}
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
