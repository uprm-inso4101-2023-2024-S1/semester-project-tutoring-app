import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BasicInfo = () => {
    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <Text>Role</Text>
            <Text>Date Joined</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
});

export default BasicInfo;