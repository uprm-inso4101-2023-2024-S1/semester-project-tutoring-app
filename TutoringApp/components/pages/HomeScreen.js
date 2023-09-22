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

import Slider from '../organisms/Scroll'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.scroll_box}>
                <View style={styles.spacer}/>
                <Slider text={'Tutoring'}/>
                <View style={styles.spacer}/>
                <Slider text={'Recommended Tutors'}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scroll_box: {
        padding: 5
    },
    box: {
        width: '100%',
        height: 180,
    },
    inner: {
        flex:1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacer: {
        height: 40,
        width: '100%'
    }
}); 