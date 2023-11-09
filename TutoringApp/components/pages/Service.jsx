import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import DepartmentList from "../../constants/department-list";
import ServiceSearch from "../atoms/ServiceSearch";
import ServiceContent from "../atoms/ServiceContent";
import { supabaseClient } from "../../configdb/supabaseClient";


/**
 * Component representing a service page that implements
 * a search bar component and displays a list of content based on user input.
 *
 * @returns {JSX.Element} The rendered Service component.
 */
const Service = () => {
  const [searchResults, setSearchResults] = useState(DepartmentList);

  const headerMessage = "Search";
  const errorMessage = "An error occurred during the search";

  const handleSearch = (text) => {
    try {
      const currText = text.trim().toLowerCase();
      if (currText.length !== 0) {
        const data = DepartmentList.filter((result) => {
          const departmentMatch = result.name?.toLowerCase().includes(currText);
          const courseOrTutorMatch = result.courseData?.some(
            (course) =>
              course.name?.toLowerCase().includes(currText.toLowerCase()) ||
              course.tutors?.some((tutor) =>
                tutor.name?.toLowerCase().includes(currText.toLowerCase())
              )
          );

          return departmentMatch || courseOrTutorMatch;
        });
        setSearchResults(data);
      } else {
        setSearchResults(DepartmentList);
      }
    } catch (error) {
      console.error(errorMessage, error);
    }
  };
  
  let data1 = supabaseClient.fetchDataFromTable('Departments');
  console.log(data1);
        
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{headerMessage}</Text>
      <ServiceSearch onSearch={handleSearch} />
      <ServiceContent searchResults={searchResults} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.medium,
  },
  header: {
    fontSize: SIZES.xLarge,
    color: COLORS.text,
    marginBottom: SIZES.medium,
  },
});

export default Service;
