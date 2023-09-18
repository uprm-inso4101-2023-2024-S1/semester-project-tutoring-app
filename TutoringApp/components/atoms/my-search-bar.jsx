import React, { useState } from "react";
import { Surface, Searchbar, Text, Card } from "react-native-paper";
import Tutor from "../atoms/tutor";

const MySearchBar = ({ allTutors }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    try {
      const filteredTutors = allTutors.filter((tutor) =>
        tutor.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filteredTutors);
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
          handleSearch();
        }}
        value={searchText}
      />
      {searchText !== "" &&
        searchResults.map((result, index) => (
          <Tutor
            key={index}
            name={result.name}
            course={result.course}
            rating={result.rating}
          />
        ))}
    </Surface>
  );
};

export default MySearchBar;