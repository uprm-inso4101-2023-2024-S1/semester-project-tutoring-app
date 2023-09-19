import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles, TextList } from "../../App";
import { Card, Title, Paragraph, Button as ReactPaperButton } from 'react-native-paper';
import Course from "./Course_component";


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
      {courseData.map((data, index) => (
          <Course key={index} CourseName={data.name} Tutors={data.tutors}/> 
        ))}
        
      </Card.Actions>
    </Card>
  );
};

export default DepartmentComponent;
