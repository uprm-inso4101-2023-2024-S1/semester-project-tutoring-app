import * as React from "react";
import Button from "react-native-paper";
import Collapsible from "react-native-collapsible";
import { List } from "react-native-paper";
import Tutor from "./tutor";
import { View } from "react-native";
import { COLORS } from "../../constants/theme";

const Course = ({ CourseName, Tutors }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        style={{
          backgroundColor: COLORS.lightWhite,
          color: COLORS.text,
          borderRadius: 15,
        }}
        title={CourseName}
        left={(props) => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
      >
        {Tutors.map((test, index) => (
          <Tutor
            key={index}
            name={test.name}
            course={test.id}
            rating={test.rating}
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default Course;