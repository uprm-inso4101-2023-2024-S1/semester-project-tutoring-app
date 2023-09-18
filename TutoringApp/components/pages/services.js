import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MySearchBar from "../atoms/my-search-bar";
import Tutor from "../atoms/tutor";
import DepartmentComponent from "../atoms/DepartmentComponent";

const departments = ["CIIC", "INGE", "ELEC"];

const searchResults = [
  { name: "Alejandro Ramirez", course: "CIIC3015", rating: 4.5 },
  { name: "Emmanuel Velez", course: "INGE3016", rating: 5 },
];

const sampleScheduleData = [
  "CIIC3015 - Alejandro Ramirez 10:00AM",
  "INGE3016 - Emmanuel Velez 1:00PM",
  "Angel Morales 4:00PM",
  "INGE3035 - Pedro Valle",
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

      <DepartmentComponent departmentName="CIIC" courseData={sampleScheduleData} />
      <DepartmentComponent departmentName="INGE" courseData={sampleScheduleData} />
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
