import React from "react";

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    
  } from "react-native";

import RecommendedTutorCard from "../molecules/RecommendedTutorCard";
import CourseCard from "../atoms/CourseCard";

export default function Slider({ components, isRecommendedCard=false, isCourseCard=false}) {
    return (
        <View>
            <ScrollView horizontal={true} style={styles.container}>
                {components.map((elm)=> {
                    if (isRecommendedCard) {
                        return (
                            <>
                            <View style = {styles.seperator}/>
                            <RecommendedTutorCard tutor={elm}/>
                            </>
                        )
                    }
                    if (isCourseCard) {
                        return (
                            <>
                            <View style = {styles.seperator}/>
                            <CourseCard courseImage={elm.courseImage} courseName={elm.courseName} courseTutor={elm.courseTutor}/>
                            </>
                        )
                    }
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
    },
    seperator: {
        width: 10
    }
})