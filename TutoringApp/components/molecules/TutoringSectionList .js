import React from 'react';
import { View, StyleSheet } from 'react-native';
import TutoringSession from '../atoms/TutoringSession';
import commonStyles from '../templates/Styles/CommonStyles';

const TutoringSessionsList = () => {

    const sessionsPlaceholder = [1, 2, 3];

    return (
        <View style={commonStyles.container}>
            {sessionsPlaceholder.map(id => (
                <TutoringSession key={id} style={styles.session} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    session: {
        marginBottom: 10,
    }
});

export default TutoringSessionsList;