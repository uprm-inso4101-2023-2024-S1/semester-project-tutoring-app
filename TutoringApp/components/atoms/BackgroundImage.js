import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BackgroundImage = ({ source }) => {
    return (
        <View style={styles.container}>
            {source ? (

                <Text>Image</Text>
            ) : (
                <Text>No Background Image</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#c0c0c0',
    },
});

export default BackgroundImage;