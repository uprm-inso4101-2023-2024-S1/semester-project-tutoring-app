import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";


const MySearchBar = () => {
  const [searchText, setSearchText] = useState("");

  // const handleSearch = () => {};

  return (
    <View>
      <SearchBar
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onEndEditing={handleSearch}
      />
    </View>
  );
};

export default MySearchBar;
