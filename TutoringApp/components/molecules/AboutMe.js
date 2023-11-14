import React from 'react';
import {Text, View} from 'react-native'

import ContactInfo from '../atoms/ContactInfo';

/**
 * Component that displays a brief introduction message of the user and ContactInfo.
 * 
 * @returns {JSX.Element} AboutMe Component
 */
const AboutMe = () => {
    return (
        <View>
            <Text>Hello! It's me Mario</Text>
            <ContactInfo />
        </View>
    );
};

export default AboutMe;
