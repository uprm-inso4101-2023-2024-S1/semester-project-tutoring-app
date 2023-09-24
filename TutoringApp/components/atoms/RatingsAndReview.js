import React from 'react';
import { Text } from 'react-native';

const Rating = ({ rating = 0 }) => {
    return <Text>Rating: {rating} / 5</Text>;
};

export default Rating;