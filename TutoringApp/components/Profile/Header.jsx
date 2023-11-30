import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Header = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={require("../../assets/pfp.png")} style={styles.profilePicture} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.major}>{user.major}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    padding: 16,
    alignItems: "center",
  },
  leftContainer: {
    marginRight: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rightContainer: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  major: {
    fontSize: 18, 
    color: "#555",
  },
  bio: {
    fontSize: 16,
  },
});

export default Header;
