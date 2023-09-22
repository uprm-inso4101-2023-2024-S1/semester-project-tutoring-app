import React from "react";

import {
    Image,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
    
  } from "react-native";

export default function Slider({text}) {
    return (
        <View>
            <Text style={styles.headingText}>{text}</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Dummy</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Dummy</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Dummy</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Dummy</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Dummy</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Dummy</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
    card: {
        flex: 1,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5
    },
    cardElevated: {
        backgroundColor: '#CAD5E2'
    }
})