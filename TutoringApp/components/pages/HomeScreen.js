import React, { useState, useEffect } from "react";
import recommendedTutors from "../molecules/recommendTutors";

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
    // for now assume user gabriel.roman7@upr.edu
    // TODO: Use login information once we have a login page
    const recommended = recommendedTutors("gabriel.roman7@upr.edu");
    console.log(recommended);

    // TODO: Fetch profile pictures from database
    return (
        <ScrollView style={styles.container}>
            <View style={styles.scroll_box}>
                <View style={styles.spacer}/>
                <Slider text={'Recommended Tutors'} components={recommended}/>

            </View>
        </ScrollView>
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