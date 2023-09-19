import * as React from 'react';
import Button from 'react-native-paper';
import Collapsible from 'react-native-collapsible';
import { List } from 'react-native-paper';
import Tutor from './tutor';



import { View } from 'react-native';


const Course = ({CourseName,Tutors}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  const title = CourseName

  const Data = Tutors

  return (
    <List.Section>
      <List.Accordion
        title={title}
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        {Data.map((test, index) => (
          <Tutor
            key={index}
            name={test}
            course={test}
            rating="1"
          />
        ))}
      </List.Accordion>
    </List.Section>
  );
};
export default Course;