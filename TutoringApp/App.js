import { StatusBar } from "expo-status-bar";
<<<<<<<<< Temporary merge branch 1
=========
import Service from "./components/pages/Service";
import Sign from "./components/pages/Sign";

import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView

} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./components/pages/HomeScreen";
import UpcomingSession from "./components/pages/upcomingSession";
import { supabaseClient } from "./config/supabaseClient";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";

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
    <Tab.Navigator
    initialRouteName={"Home"}
    tabBarOptions={{
      activeTintColor: "#674886",
      inactiveTintColor: "grey",
      labelStyle: { paddingBottom: 5, fontSize: 10 },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === "HomeScreen") {
          iconName = focused ? "home" : "home-outline"
        } else if (rn === "Search") {
          iconName = focused ? "search" : "search-outline"
        } else if (rn === "Activity") {
          iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"
        } else if (rn === "Profile") {
          iconName = focused ? "people-circle" : "people-circle-outline"
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      }
    })}
    >
        <Tab.Screen name="Sign" component={SignScreen} />
        <Tab.Screen name="HomeScreen" component={StackNavigator} options={ { headerShown: false, title: "Home" } }/>
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="UpcomingSession" component={UpcomingSession}/>
    </Stack.Navigator>
    )
}

export default function App() {
  const data = supabaseClient.fetchDataFromTable();
  console.log(data);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </View>
  );
}

function SignScreen() {
  return Sign();
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
  const [, setUserData] = useState(null);
  const userId = route.params.userId; // Assuming you pass the user ID as a parameter

  useEffect(() => {
    // Fetch user data from the "users" table using supabaseClient
    async function fetchUserData() {
      try {
        const data = await supabaseClient.fetchDataFromTable();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    }

    fetchUserData();
  }, [userId]);

  return (
    <View style={styles.profile}>
       {/* Display user data here */}
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
      <ScrollView style={{ flex: 1 }}>
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
