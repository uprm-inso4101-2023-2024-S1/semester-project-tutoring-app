import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProfilePicture = () => {
    return (
        <View style={styles.placeholder}></View>
    );
};

const styles = StyleSheet.create({
    placeholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e0e0e0',
    },
});

export default ProfilePicture;