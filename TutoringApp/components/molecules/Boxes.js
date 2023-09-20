import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Boxes() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.inner}>
                <Text>Box 1</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
    },
    box: {
        width: '100%',
        height: '30%',
        padding: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    }
});