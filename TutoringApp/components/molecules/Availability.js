import React from 'react';
import { Text, View } from 'react-native';

const AvailabilitySchedule = ({ schedule = [] }) => {
    return (
        <View>
            {schedule.map((entry, index) => (
                <Text key={index}>{entry.day}: {entry.time}</Text>
            ))}
        </View>
    );
};

export default AvailabilitySchedule;