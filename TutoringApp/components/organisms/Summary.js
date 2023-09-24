import React from 'react';
import { Text, View } from 'react-native';
import Rating from '../atoms/RatingAndReview';

const TutorSummary = () => {
    return (
        <View>
            <Text>Name</Text>
            <Rating rating={4.5} />
            <Text>Short Bio</Text>
        </View>
    );
};

export default TutorSummary;