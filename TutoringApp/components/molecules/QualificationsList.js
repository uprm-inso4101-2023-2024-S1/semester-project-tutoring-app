import React from 'react';
import { Text, View } from 'react-native';

const Qualifications = ({ qualifications = [] }) => {
    return (
        <View>
            {qualifications.map((qual, index) => (
                <Text key={index}>{qual}</Text>
            ))}
        </View>
    );
};

export default Qualifications;