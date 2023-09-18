import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import MySearchBar from "../atoms/my-search-bar";
import Tutor from "../atoms/tutor";
import DepartmentComponent from "../atoms/DepartmentComponent";
import allTutors from "../atoms/listTutors";
import allDepartments from "../atoms/listDepartments";

const Services = () => {

  const [searchResults, setSearchResults] = useState([]); 

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MySearchBar allTutors={allTutors} />

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Tutor name={item.name} course={item.course} rating={item.rating} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      

      <DepartmentComponent
          key={allDepartments.id} // Ensure you have a unique key for each DepartmentComponent
          departmentName={allDepartments.name}
          courseData={allDepartments.courses}
        />
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  profile: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 16,
  },
  overlapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  row: {
    flexDirection: "row", // Arrange child components horizontally
    alignItems: "center", // Align items vertically at the center
    padding: 16,
  },
  item: {
    backgroundColor: "lightgray",
    padding: 10,
    marginVertical: 5,
  },
  textbox: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    margin: 3,
  },
});

export default Services;
