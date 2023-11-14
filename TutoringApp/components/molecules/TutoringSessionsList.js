import React from 'react';
import {View} from 'react-native'

import TutoringSession from '../atoms/TutoringSession';

/**
 * Component that contains and displays a list of TutoringSession elements.
 * 
 * It could be on ongoing or completed sessions.
 * 
 * @returns {JSX.Element} TutoringSessionsList Component
 */
const TutoringSessionsList = () => {
    return (
        <View>
            <TutoringSession />
        </View>
    );
};

export default TutoringSessionsList;
