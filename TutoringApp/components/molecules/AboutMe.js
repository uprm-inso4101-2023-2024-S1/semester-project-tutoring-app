import React from 'react';
import { Text, View } from 'react-native';
import ContactInfo from '../atoms/ContactInfo';
import commonStyles from '../templates/Styles/CommonStyles';

const AboutMe = () => {
    return (
        <View style={commonStyles.container}>
            <Text>Hello World!</Text>
            <ContactInfo />
        </View>
    );
};

export default AboutMe;