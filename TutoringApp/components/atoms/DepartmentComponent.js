import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles, TextList } from "../../App";
import { Card, Title, Paragraph, Button as ReactPaperButton } from 'react-native-paper';
import Course from "../atoms/Course_component";


const DepartmentComponent = ({ departmentName, courseData }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };

  const sampleScheduleData = [
    "CIIC3015 - Alejandro Ramirez 10:00AM",
    "INGE3016 - Emmanuel Velez 1:00PM",
    " Angel Morales 4:00PM",
    "INGE3035 - Pedro Valle",
  ];

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{departmentName}</Title>
        <Paragraph>Select a course to see its available tutors and schedules.</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Course CourseName={courseData} Tutors={sampleScheduleData}/> 
      </Card.Actions>
    </Card>
  );
};

export default DepartmentComponent;
