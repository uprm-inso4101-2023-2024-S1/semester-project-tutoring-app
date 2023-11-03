import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { COLORS } from "../../constants/theme";

/**
 * Component that handles the search bar and search logic.
 *
 * @param {function} onSearch - The function called when a search is performed.
 * @returns {JSX.Element} The rendered ServiceSearch component.
 */
const ServiceSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <Searchbar
      placeholder="Search: Departments, Courses, and Tutors"
      placeholderTextColor={COLORS.text}
      onChangeText={handleSearch}
      value={searchText}
      iconColor={COLORS.primary}
      inputStyle={{ color: COLORS.text }}
    />
  );
};

export default ServiceSearch;
