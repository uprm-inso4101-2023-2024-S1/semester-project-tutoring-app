import { StatusBar } from "expo-status-bar";

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
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/pages/HomeScreen";
import UpcomingSession from "./components/pages/upcomingSession";


//Sample Data for First Mockup Version
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={StackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name="UpcomingSession" component={UpcomingSession} />
    </Stack.Navigator>
  )

}

export default function App() {
  console.log(Stack)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

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
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    margin: 3,
  },
});

function ProfileScreen({ route }) {
  return (
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
  );
}
function ActivityScreen({ route }) {


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Activity!</Text>
    </View>
  );
}
function SearchScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
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