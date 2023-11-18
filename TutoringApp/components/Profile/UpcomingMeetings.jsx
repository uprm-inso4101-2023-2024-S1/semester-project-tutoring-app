import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UpcomingMeetings = ({ meetings }) => {
  return (
    <View style={styles.meetingsContainer}>
      <Text style={styles.meetingsTitle}>Upcoming Meetings</Text>
      {meetings.map((meeting, index) => (
        <View key={index} style={styles.meetingItem}>
          <Text style={styles.meetingDate}>{meeting.date}</Text>
          <Text style={styles.meetingTime}>{meeting.time}</Text>
          <Text style={styles.meetingCourse}>{meeting.course}</Text>
          <Text style={styles.meetingStudent}>Student: {meeting.student}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  meetingsContainer: {
    backgroundColor: "#E0E0E0",
    padding: 16,
    borderRadius: 10,
  },
  meetingsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333", 
  },
  meetingItem: {
    backgroundColor: "#007BFF",
    padding: 12,
    margin: 8,
    borderRadius: 8,
  },
  meetingDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  meetingTime: {
    color: "#fff",
  },
  meetingCourse: {
    color: "#fff",
  },
  meetingStudent: {
    color: "#fff",
  },
});

export default UpcomingMeetings;
