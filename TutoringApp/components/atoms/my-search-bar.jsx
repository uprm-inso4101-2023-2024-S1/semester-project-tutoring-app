import React, { useState } from "react";
import { Surface, Searchbar, Text, Card } from "react-native-paper";
import DepartmentComponent from "./DepartmentComponent";


const MySearchBar = ({ allTutors }) => {
  let [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(allTutors);

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
      
      {searchResults.map((result, index) => (
          <DepartmentComponent key={index} departmentName={result.name} courseData={result.courseData}/>
        ))}
    </Surface>
  );
};

export default MySearchBar;