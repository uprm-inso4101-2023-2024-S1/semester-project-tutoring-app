import React, { useState } from "react";
import { Surface, Searchbar, Text, Card } from "react-native-paper";

const MySearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    try {
      const filteredTutors = tutors.filter((tutor) =>
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
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onEndEditing={handleSearch}
      />
      {searchResults.map((result, index) => (
        <Tutor
          key={index}
          name={tutor.name}
          course={tutor.course}
          rating={tutor.rating}
        />
      ))}
    </Surface>
  );
};

export default MySearchBar;
