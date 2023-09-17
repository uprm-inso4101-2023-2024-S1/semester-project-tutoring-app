import * as React from 'react';
import Button from 'react-native-paper';
import Collapsible from 'react-native-collapsible';



import { View } from 'react-native';


const Course = (listTutors) => {
    const [collapsed, setCollapsed] = React.useState(true);

    const toggleExpand = () => {
      setCollapsed(!collapsed);
    };
    const sampleAvalibles = listTutors;

    const TextList = ({ textList }) => {
        return (
          <View>
            {textList.map((text, index) => (
              <View style={styles.textbox}>
                <Text key={index} style={styles.text}>
                  {text}
                </Text>
              </View>
            ))}
          </View>
        );
      };

  return (
    <>
    <Button
        title="CIIC4010"
        onPress={toggleExpand}
      />
      <Collapsible collapsed = {collapsed}>
        <View>
          <TextList textList={sampleAvalibles} />
        </View>
    </Collapsible>
    </>
    
  );
};
export default Course;