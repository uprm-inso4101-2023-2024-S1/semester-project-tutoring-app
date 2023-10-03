import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import { Card, Title, Paragraph } from "react-native-paper";
import Course from "../molecules/Course";

/**
 * Represents a department component.
 *
 * @param {Object} props - The properties for the department component.
 * @param {string} props.departmentName - The name of the department.
 * @param {Array} props.courseData - The data of courses within the department.
 * @param {string} props.departmentMessage - The optional message for the department.
 * @returns {JSX.Element} A Card component representing the department with its courses.
 */
const Department = ({
  departmentName,
  courseData,
  departmentMessage = "Select a course to see its available tutors and schedules.",
}) => {
  return (
    <Card style={styles.courseCard}>
      <Card.Content>
        <Title style={styles.title}>{departmentName}</Title>
        <Paragraph style={styles.paragraph}>{departmentMessage}</Paragraph>
        {courseData.map((data, index) => (
          <Course key={index} CourseName={data.name} Tutors={data.tutors} />
        ))}
      </Card.Content>
    </Card>
  );
};

/**
 * StyleSheet for styles used in the Department component.
 */
const styles = StyleSheet.create({
  courseCard: {
    marginVertical: 30,
    borderWidth: 2,
    height: "auto",
    borderColor: COLORS.primary,
    color: COLORS.text,
  },
  title: {
    fontSize: SIZES.xxLarge,
  },
  paragraph: {
    fontSize: SIZES.large,
  },
});

export default Department;
