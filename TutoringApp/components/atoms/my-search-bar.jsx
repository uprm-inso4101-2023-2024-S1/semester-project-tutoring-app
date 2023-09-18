import React, { useState } from "react";
import { Surface, SearchBar, Text, Card } from "react-native-paper";

const MySearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    try {
      // TODO
      const data = [];
      setSearchResults(data);
    } catch (error) {
      console.error("An error occurred during the search", error);
    }
  };

  return (
    <Surface>
      <SearchBar
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onEndEditing={handleSearch}
      />
      {searchResults.map((result, index) => (
        <Card key={index}>
          <Card.Content>
            <Text>{result}</Text>
          </Card.Content>
        </Card>
      ))}
    </Surface>
  );
};

export default MySearchBar;
