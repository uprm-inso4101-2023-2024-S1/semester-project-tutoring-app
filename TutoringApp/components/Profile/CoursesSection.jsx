import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CoursesSection = ({ courses }) => {
  return (
    <View style={styles.coursesSection}>
      <Text style={styles.coursesTitle}>My Courses</Text>
      <View style={styles.courseRow}>
        {courses.map((course, index) => (
          <View key={index} style={styles.courseItem}>
            <Text style={styles.courseText}>{course}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coursesSection: {
    backgroundColor: "#E0E0E0", 
    padding: 16,
    borderRadius: 10,
  },
  coursesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333", 
  },
  courseRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  courseItem: {
    backgroundColor: "#007BFF", 
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  courseText: {
    color: "#fff",
  },
});

export default CoursesSection;
