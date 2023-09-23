import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles, TextList } from "../../App";
import { COLORS, SIZES } from "../../constants/theme";
import {
  Card,
  Title,
  Paragraph,
  Button as ReactPaperButton,
} from "react-native-paper";
import Course from "./Course_component";

const DepartmentComponent = ({ departmentName, courseData }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Card style={deparmentStyles.courseCard}>
      <Card.Content>
        <Title style={{ color: COLORS.text, fontSize: SIZES.xxLarge }}>
          {departmentName}
        </Title>
        <Paragraph style={{ color: COLORS.text, fontSize: SIZES.large }}>
          Select a course to see its available tutors and schedules.
        </Paragraph>
        {courseData.map((data, index) => (
          <Course key={index} CourseName={data.name} Tutors={data.tutors} />
        ))}
      </Card.Content>
    </Card>
  );
};

const deparmentStyles = StyleSheet.create({
  courseCard: {
    marginVertical: 30,
    flex: 1,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
});

export default DepartmentComponent;
