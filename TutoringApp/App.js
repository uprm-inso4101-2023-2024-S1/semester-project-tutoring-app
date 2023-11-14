import { StatusBar } from "expo-status-bar";
import Service from "./components/pages/Service";

import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { COLORS } from "./constants/theme";

//Sample Data for First Mockup Version
const Tab = createBottomTabNavigator();
const sampleCourseData = [
  { id: "1", text: "CIIC3015" },
  { id: "2", text: "CIIC4010" },
  { id: "3", text: "CIIC4020" },
];
const sampleScheduleData = [
  "CIIC3015 - Alejandro Ramirez 10:00AM",
  "INGE3016 - Emmanuel Velez 1:00PM",
  " Angel Morales 4:00PM",
  "INGE3035 - Pedro Valle",
];
const sampleNotifications = [
  "Steve Gates has sent you a message ",
  "CIIC4020 Exam 2 is comming up. Be sure to watch course video on 'Stacks and Queues'",
  "Ismael Rivera has posted his latest tutoring video on Chapter 6",
  "Ismael Rivera sent you a message",
];
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on Tutoring App!</Text> */}
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.jumpTo("Profile", { owner: "Jose" })}
      />
    </View>
  );
}

function ProfileScreen({ route }) {
  return (
    <ScrollView style={{ flex: 1 }}>
    <View style={styles.profile}>
      <View style={styles.row}>
        <Image
          source={require("./assets/pfp.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            overflow: "hidden",
          }}
        />
        <Text style={{ fontSize: 28 }}> Jose Morales Molina</Text>
      </View>
      <Text style={{ color: "blue" }}> Edit Profile</Text>
      <View>
        <Text style={{ fontSize: 24 }}>My Courses</Text>
        <MyList />
      </View>
      <Text style={{ fontSize: 24 }}>Upcoming Meetings</Text>
      <TextList textList={sampleScheduleData} />
      <Text style={{ fontSize: 24 }}>Tags</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} disabled={true}>
          <Text>#LeetCode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled={true}>
          <Text>#Java</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled={true}>
          <Text>#Python</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}
function ActivityScreen({ route }) {
  const chatData = [
    { id: '1', text: 'Notifications' },
    { id: '2', text: 'Schedule' },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#00cc99', flexDirection: 'row', alignItems: 'center',
       justifyContent: 'space-between', padding: 30}}>
        <Image source={require("./assets/favicon.png")} style={{ width: 50, height: 50 }} />
        
      </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 0.2, backgroundColor: '#e0ebeb' }}>
            <Text style={{fontSize: 30, padding: 25, fontWeight: "bold"}}>Activity</Text>
            <Text style={{fontSize: 28, padding:30, paddingLeft: 40}}>Notifications</Text>
            <Text style={{fontSize: 28, padding:30, paddingLeft: 40}}>Schedule</Text>
          </View>
          <View style={{ flex: 0.8, flexDirection:'column' }}>
              <View style={{flex: 0.10, backgroundColor: '#c3d5d5'}}>
                <Text style ={{fontSize: 22, paddingLeft: 50, paddingVertical: 10}}>Notifications</Text>
              </View>
            <ScrollView style={{ flex: 1 }}>
              <View style={{flex: 0.90, backgroundColor: '#f0f5f5'}}>
              <NotificationList notify={sampleNotifications} />
              </View>
            </ScrollView>
          </View>
        </View>
    </View>
  );
}
function SearchScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {Service()}
        <Text>
          {route?.params?.owner ? `${route.params.owner}'s Activity` : ""}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );
};
const MyList = () => {
  return (
    <FlatList
      data={sampleCourseData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
export const TextList = ({ textList }) => {
  return (
    <View>
      {textList.map((text, index) => (
        <View style={styles.textbox}>
          <Text key={index} style={styles.text}>
            {text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export const NotificationList = ({ notify }) => {
  return (
    <View>
      {notify.map((text, index) => (
        <View style={styles.notifications} key={index}>
          <Text style={{fontSize: 20}}>
          <Text style={{fontSize: 20}}>•</Text> {text}
          </Text>
        </View>
      ))}
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  profile: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 16,
  },
  row: {
    flexDirection: "row", // Arrange child components horizontally
    alignItems: "center", // Align items vertically at the center
    padding: 16,
  },
  item: {
    backgroundColor: "lightgray",
    padding: 10,
    marginVertical: 5,
  },
  textbox: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    borderRadius: 5,
    margin: 3,
  },
  notifications: {
    borderColor: "green",
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 40,
    margin: 8,
  }
});
