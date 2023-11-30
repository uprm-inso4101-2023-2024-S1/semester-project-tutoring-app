import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Header from "./components/Profile/Header";
import Stats from "./components/Profile/Stats";
import Bio from "./components/Profile/Bio";
import EditProfileButton from "./components/Profile/EditProfileButton";
import CoursesSection from "./components/Profile/CoursesSection";
import UpcomingMeetings from "./components/Profile/UpcomingMeetings";
import ReviewSection from "./components/Profile/ReviewSection";

const user = {
  username: "Sandy Marrero",
  profilePicture: "sampleurl.com",
  bio: "Android Developer",
  major: "Software Engineering",
  sessionsGiven: 20,
  reviews: 15,
  clients: 10,
  tags: ["#LeetCode", "#EmbeddedSystems", "#Python"],
  courses: ["CIIC3015", "CIIC4010", "CIIC4020"],
  upcomingMeetings: [
    {
      date: "2023-11-01",
      time: "10:00 AM",
      course: "CIIC3015 - Intro to Programming",
      student: "Jose Perez",
    },
    {
      date: "2023-11-02",
      time: "2:30 PM",
      course: "CIIC4010 - Advanced Programming",
      student: "Andrea Sofia",
    },
  ],
  ratings: [
    {
      author: "Ezequiel M.",
      text: "Great tutor! Highly recommended.",
      rating: 5,
    },
    {
      author: "Jorge T.",
      text: "Awesome teacher! Learned a lot.",
      rating: 4,
    },
  ],
};

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header user={user} />
      <Stats user={user} />
      <View style={styles.separator} />
      <Bio user={user} />
      <View style={styles.separator} />
      <CoursesSection courses={user.courses} />
      <View style={styles.separator} />
      <UpcomingMeetings meetings={user.upcomingMeetings} />
      <View style={styles.separator} />
      <ReviewSection ratings={user.ratings} /> <EditProfileButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
  },
});

export default ProfileScreen;
