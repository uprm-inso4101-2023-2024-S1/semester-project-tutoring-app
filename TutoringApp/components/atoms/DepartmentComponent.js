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

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{departmentName}</Title>
        <Paragraph>Select a course to see its available tutors and schedules.</Paragraph>
      </Card.Content>
      <Card.Actions>
        <ReactPaperButton onPress={toggleExpand} style={styles.button}>
          {collapsed ? "Expand Courses" : "Collapse Courses"}
        </ReactPaperButton>
        {!collapsed && (
          <Course courseData={courseData} /> 
        )}
      </Card.Actions>
    </Card>
  );
};

export default DepartmentComponent;
