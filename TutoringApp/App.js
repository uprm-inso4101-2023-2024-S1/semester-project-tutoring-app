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
import {fetchProfilePic, supabaseClient} from "./config/supabaseClient";
import supabase from "./config/supabaseClient";
import {useEffect, useState} from "react";


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
    <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name="UpcomingSession" component={UpcomingSession}/>
    </Stack.Navigator>
    )
    
}

export default function App() {

  const data = supabaseClient.fetchDataFromTable();
  console.log(data);
  const insert = supabaseClient.insertDataIntoTable();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator> */}
        <TabNavigator/>
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
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
  },
});

function ProfileScreen({ route }) {
  const [profPic, setProfPic] = useState(null);

  useEffect(() => {
    
    fetchProfilePic('840201644')
      .then(profilePicUrl => {
        setProfPic(profilePicUrl);
      })
      .catch(error => {
        console.error(error);
      });
      
  }, []);


  return (
    <View style={styles.profile}>
      <View style={styles.row}>
      {profPic && (
          <Image
            source={{ uri: profPic }}
          />
        )}
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
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    // Fetch activity data from the "activity" table using supabaseClient
    async function fetchActivityData() {
      try {
        const data = await supabaseClient.fetchDataFromTable("student_tutor_courses_relationship"); // Specify your table name
        setActivityData(data);
      } catch (error) {
        console.error("Error fetching activity data:", error.message);
      }
    }

    fetchActivityData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Activity!</Text>
      {/* Display activity data here */}
      {activityData.map((activityItem, index) => (
        <View key={index}>
          <Text>{activityItem.description}</Text>
          {/* Display other activity data fields as needed */}
        </View>
      ))}
    </View>
  );
}
function SearchScreen({ route }) {

  const [searchResults, setSearchResults] = useState([]);
  const owner = route.params.owner; // Assuming you pass the owner as a parameter

  useEffect(() => {
    // Fetch search results from the "search_results" table using supabaseClient
    async function fetchSearchResults() {
      try {
        const data = await supabaseClient.fetchDataFromTable("search_results"); // Specify your table name
        // Filter the results by owner
        const filteredResults = data.filter((result) => result.owner === owner);
        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error fetching search results:", error.message);
      }
    }

    fetchSearchResults();
  }, [owner]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1}}>
      <Text>
        {route?.params?.owner ? `${route.params.owner}'s Activity` : ""}
      </Text>

      {/* Display search results here */}
      {searchResults.map((resultItem, index) => (
          <View key={index}>
            <Text>{resultItem.name}</Text>
            {/* Display other search result fields as needed */}
          </View>
        ))}
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