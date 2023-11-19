import { useState } from "react";

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from "react-native";

import Slider from "../organisms/Scroll";
import PastActiveCourseButton from "../atoms/PastActiveCourseButton";
import { fetchTutors } from "../../config/supabaseClient";

export default function HomeScreen() {
    const [status, setStatus] = useState("Active");

    const toggleStatus = () => {
        if (status === "Active") {
          setStatus("Past");
        } else {
          setStatus("Active");
        }
      };

    const recommendedTutors = fetchTutors("802201628"); //assuming for now a specific user given that we don"t have a login page
    console.log(recommendedTutors);

    const tutorsToUse = [];
    if (recommendedTutors != null) {
    for (let i = 0, len = recommendedTutors.length; i < len; i++) {
      const tut = {
        name: String(recommendedTutors[i].names),
        specialty: String(recommendedTutors[i].specialty),
        courses: recommendedTutors[i].courses,
        profile: "",
        rating: Number(recommendedTutors[i].tutor_rating)
      };
      tutorsToUse.push(tut)
    }
    }

    console.log(tutorsToUse);

    const testCourseCardActive = [{ courseImage: require("../../assets/data-structures.png"), courseName: "Data Structures", courseTutor: "Jose", link: "www.google.com", startDate: "9/25/2023", endDate: "10/20/2024", startTime: "12:00pm", endTime: "7:00pm", tutor: "Jose" }, { courseImage: require("../../assets/electric.jpeg"), courseName: "Electric", courseTutor: "Pablo", link: "www.google.com", startDate: "9/25/2023", endDate: "10/20/2024", startTime: "1:00pm", endTime: "2:00pm", tutor: "Paco" }]
    const testCourseCardPast = [{ courseImage: require("../../assets/electric.jpeg"), courseName: "Data Structures", courseTutor: "Paco" }, { courseImage: require("../../assets/electric.jpeg"), courseName: "Electric", courseTutor: "Pablo" }]
    const courseData = status === "Active" ? testCourseCardActive : testCourseCardPast;

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
        backgroundColor: "white"
    },
    scroll_box: {
        padding: 5
    },
    box: {
        width: "100%",
        height: 180,
    },
    inner: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center"
    },
    spacer: {
        height: 40,
        width: "100%"
    },
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    toggle_container_with_header: {
        flexDirection: "row",
    }
});
