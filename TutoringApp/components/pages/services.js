import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MySearchBar from "../atoms/my-search-bar";
import Tutor from "../atoms/tutor";
import DepartmentComponent from "../molecules/DepartmentComponent";
import { sampleScheduleData } from "../../App";

const searchResults = [
  { name: "Tutor 1", course: "CIIC3015", rating: 4 },
  { name: "Tutor 2", course: "CIIC4010", rating: 5 },
];

const Services = () => {
  return (
    <View style={styles.container}>
      <MySearchBar />

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Tutor name={item.name} course={item.course} rating={item.rating} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <DepartmentComponent departmentName="Department 1" courseData={sampleScheduleData} />
      <DepartmentComponent departmentName="Department 2" courseData={sampleScheduleData} />
    </View>
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
