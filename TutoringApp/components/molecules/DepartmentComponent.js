import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Collapsible from "react-native-collapsible";
import { styles, TextList } from "../../App";


const DepartmentComponent = ({ departmentName, courseData }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{departmentName}</Text>
      </View>
      <View style={styles.cardDescription}>
        <Text style={styles.cardDescription}>Select a course to see its available tutors and schedules.</Text>
      </View>
      <View style={styles.courses}>
        
        {/* Include Course Component here */}
        <Button title={"Course Component Placeholder"} onPress={toggleExpand} />

      </View>
    </View>
  );
};

export default DepartmentComponent;
