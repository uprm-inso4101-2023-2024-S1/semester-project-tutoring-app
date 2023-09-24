import React from 'react';
import { View, Text } from 'react-native';
import TutoringSessionsList from '../molecules/TutoringSessionsList';
import commonStyles from '../templates/Styles/CommonStyles';

const TutoringSessionsBoard = () => {
    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.sectionLabel}>Ongoing Sessions</Text>
            <TutoringSessionsList />

            <Text style={commonStyles.sectionLabel}>Completed Sessions</Text>
            <TutoringSessionsList />
        </View>
    );
};

export default TutoringSessionsBoard;