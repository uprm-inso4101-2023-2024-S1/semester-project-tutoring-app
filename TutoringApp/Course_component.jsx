import * as React from 'react';
import Button from 'react-native-paper';
import Collapsible from 'react-native-collapsible';
import { List } from 'react-native-paper';



import { View } from 'react-native';


const Course = ({CourseName,Tutor}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  const title = CourseName

  const Data = Tutor

  return (
    <List.Section>
      <List.Accordion
        title={title}
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        {Data.map((text, index) => (
          <>
          <List.Item title={text}/>
          </>
        ))}
        
      </List.Accordion>
    </List.Section>
  );
};
export default Course;