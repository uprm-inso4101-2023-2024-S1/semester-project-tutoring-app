import React from "react";

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    
  } from "react-native";

import RecommendedTutorCard from "../molecules/RecommendedTutorCard"

export default function Slider({text, components}) {
    return (
        <View>
            <Text style={styles.headingText}>{text}</Text>
            <ScrollView horizontal={true} style={styles.container}>
                {components.map((tutor, index)=> {
                    return (
                        <>
                        <View style = {styles.seperator}/>
                        <RecommendedTutorCard tutor={tutor}/>
                        </>
                    )
                })}
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
        padding: 5,
        flexDirection: 'row',
        gap: 20
    },
    seperator: {
        width: 10
    }
})