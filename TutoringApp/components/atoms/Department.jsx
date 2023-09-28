import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import { Card, Title, Paragraph } from "react-native-paper";
import Course from "../molecules/Course";

const Department = ({ departmentName, courseData }) => {
  return (
    <Card style={styles.courseCard}>
      <Card.Content>
        <Title style={styles.title}>{departmentName}</Title>
        <Paragraph style={styles.paragraph}>
          Select a course to see its available tutors and schedules.
        </Paragraph>
        {courseData.map((data, index) => (
          <Course key={index} CourseName={data.name} Tutors={data.tutors} />
        ))}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    marginVertical: 30,
    borderWidth: 2,
    height: "auto",
    borderColor: COLORS.primary,
    color: COLORS.text
  },
  title: {
    fontSize: SIZES.xxLarge,
  },
  paragraph: {
    fontSize: SIZES.large,
  },
});

export default Department;
