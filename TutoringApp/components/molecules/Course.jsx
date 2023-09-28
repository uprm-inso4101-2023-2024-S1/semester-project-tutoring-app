import * as React from "react";
import { List } from "react-native-paper";
import Tutor from "../atoms/Tutor";
import { COLORS } from "../../constants/theme";

const Course = ({ CourseName, Tutors }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <View
        style={{
          backgroundColor: COLORS.lightWhite,
          color: COLORS.text,
          borderRadius: 15,
        }}
      >
        <List.Accordion
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
      </View>
    </List.Section>
  );
};

export default Course;
