import { StatusBar } from "expo-status-bar";
import Service from "./components/pages/Service";
import Sign from "./components/pages/Sign";

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
import { COLORS } from "./constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/pages/HomeScreen";
import UpcomingSession from "./components/pages/upcomingSession";
import {supabaseClient,supabase} from "./config/supabaseClient";
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
          <Tab.Screen name="Sign" component={SignScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{userId:840201641}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}


function SignScreen() {
  return Sign();
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

  const [userData, setUserData] = useState(null);
  const id = route.params.userId

 

  useEffect(() => {
    // Fetch user data from the "users" table using supabaseClient
    async function fetchUserData() {
      try {
        const {data:user} = await supabase.from('users').select("user_id,names,last_name,pfp_image").eq('user_id',route.params.userId);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    }

    fetchUserData();
  }, []);

  console.log(userData);

  
  if(userData){
    return (
      <View style={styles.profile}>
         {/* Display user data here */}
       
        <View style={styles.row}>
          <Image
            source={userData[0]['pfp_image']}
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
  }else{
    return (
      <View style={styles.profile}>
         {/* Display user data here */}
       
        <View style={styles.row}>
        </View>
      </View>
    );
  }
  
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
