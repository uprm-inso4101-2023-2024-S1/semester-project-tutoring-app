import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MySearchBar from "./my-search-bar";
import Tutor from "./tutor";
import DepartmentComponent from "./DepartmentComponent";
import { sampleScheduleData } from "./App";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default Services;
