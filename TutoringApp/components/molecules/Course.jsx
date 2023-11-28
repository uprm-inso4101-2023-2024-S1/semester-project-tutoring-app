import * as React from "react";
import { List } from "react-native-paper";
import Tutor from "../atoms/Tutor";
import { COLORS } from "../../constants/theme";

/**
 * Component FolderIcon used in the course list.
 *
 * @returns {JSX.Element} The folder icon component.
 */
const FolderIcon = () => (
  <List.Icon
    style={{
      backgroundColor: COLORS.lightWhite,
      color: COLORS.text,
      borderRadius: 15,
    }}
    icon="folder"
  />
);

/**
 * Represents a course component with an expandable list of tutors.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.CourseName - The name of the course.
 * @param {Array} props.Tutors - A list of tutors associated with the course.
 * @returns {JSX.Element} The rendered Course component.
 */
const Course = ({ CourseName, Tutors }) => {
  const [expanded, setExpanded] = React.useState(false);

  /**
   * Handles the event of pressing the course expansion button by toggling the expansion state.
   */
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title={CourseName}
        left={FolderIcon}
        expanded={expanded}
        onPress={handlePress}
      >
        {Tutors.map((test, index) => (
          <Tutor
            key={index}
            name={test.names}
            course={test.id}
            rating={test.tutor_rating}
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default Course;
