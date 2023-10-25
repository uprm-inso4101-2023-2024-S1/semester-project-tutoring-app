import React, { useState, useEffect } from "react";

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

import Slider from '../organisms/Scroll';
import CourseCard from '../atoms/CourseCard';
import PastActiveCourseButton from "../atoms/PastActiveCourseButton";
import { useNavigation } from "@react-navigation/native";
import { supabaseClient } from "../../config/supabaseClient";


export default function HomeScreen() {
    // let tut = [{'id': 0,
    //     properties: {'name': "Joe Biden",
    //     'specialty': "Economics",
    //     'courses' : ['Intro to Economics', 'Finance'],
    //     'rating': 4
    //     }},
    //     {id: 1, properties: {'name' : "Vannesa Ramos",
    //     'specialty' : "Computer Science",
    //     'courses' : ['CIIC3081', 'CIIC4020'],
    //     'profile' : '',
    //     'rating' : 3.7}}
    // ];
    //  Current Issue to look into, the console is complaining
    //  that the tutor does not have a unique key, however, I believe
    //  this issue should be solved when the data base is set.

    const [status, setStatus] = useState("Active");

    const toggleStatus = () => {
        if (status === "Active") {
          setStatus("Past");
        } else {
          setStatus("Active");
        }
      };
    
    // Static Testing
    const tutor = {
        'name' : "Barack Obama",
        'specialty' : "Economics",
        'courses' : ['Intro to Economics', 'Finance'],
        'profile' : '',
        'rating' : 4
      };
      const tutor2 = {
        'name' : "Trump",
        'specialty' : "Computer Science",
        'courses' : ['CIIC3081', 'CIIC4020'],
        'profile' : '',
        'rating' : 3.7
      };
    const tutor3 = {
        'name' : "Jose River",
        'specialty' : "English",
        'courses' : ['INGL3010', 'INGL5030'],
        'profile' : '',
        'rating' : 4.7
      };

    const rec = supabaseClient.fetchRecommendedTutors('802201628');
    console.log(rec);
    const tutorsToUse = [];
    (async() => {
      await rec.then(result => {if (result) {
        console.log(result);
        for (var i = 0, len = result.length; i < len; i++) {
          const tut = {
            'name' : String(result[i].names),
            'specialty' : String(result[i].specialty),
            'courses' : [String(result[i].course_id)],
            'profile' : "",
            'rating' : Number(result[i].tutor_rating)
          };
          tutorsToUse.push(tut)
          console.log(tut);    
          console.log(tutorsToUse[0]);
        }
      }});
    })();

    console.log(tutorsToUse);
    console.log(tutorsToUse[0]);

    tutorsToUse.forEach((element) => console.log(element));
    
    const tutors2 = [tutor, tutor2, tutor3]
    console.log(tutors2);

    const test_course_card_active = [{courseImage: require('../../assets/data-structures.png'), courseName: 'Data Structures', courseTutor: 'Jose', link: 'www.google.com', startDate: '9/25/2023', endDate: '10/20/2024', startTime: '12:00pm', endTime: '7:00pm', tutor: 'Jose'},{courseImage: require('../../assets/electric.jpeg'), courseName: 'Electric', courseTutor: 'Pablo',link: 'www.google.com', startDate: '9/25/2023', endDate: '10/20/2024', startTime: '1:00pm', endTime: '2:00pm', tutor: 'Paco'}]
    const test_course_card_past = [{courseImage: require('../../assets/electric.jpeg'), courseName: 'Data Structures', courseTutor: 'Paco'}, {courseImage: require('../../assets/electric.jpeg'), courseName: 'Electric', courseTutor: 'Pablo'}]
    const courseData = status === "Active" ? test_course_card_active : test_course_card_past;


    return (
        <ScrollView style={styles.container}>
            <View style={styles.scroll_box}>
                <View style={styles.spacer} />
                <View style={styles.toggle_container_with_header}>
                    <Text style={styles.headingText}>{status === "Active" ? "Active" : "Past"} Courses</Text>
                    <PastActiveCourseButton onPress={toggleStatus} status={status}/>
                </View>
                <Slider components={courseData} isCourseCard={true} />
                <View style={styles.spacer} />
                <Text style={styles.headingText}>Recommended Tutors</Text>
                <Slider components={tutorsToUse} isRecommendedCard={true} />
                <View style={styles.spacer} />
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
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    toggle_container_with_header: {
        flexDirection: 'row',
    }
});