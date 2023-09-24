import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ContactInfo = () => {
    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <Text>Phone</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0', // light gray to indicate it's a placeholder
        borderRadius: 5,
    },
});

export default ContactInfo;