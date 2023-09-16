import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";

const MySearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    try {
      // TODO
      const data = [] 
      setSearchResults(data)
    } catch (error) {
      console.error("An error occurred during the search", error);
    }
  };

  return (
    <View>
      <SearchBar
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onEndEditing={handleSearch}
      />
      {searchResults.map((result) => (
        <View>{result}</View>
      ))}
    </View>
  );
};

export default MySearchBar;
