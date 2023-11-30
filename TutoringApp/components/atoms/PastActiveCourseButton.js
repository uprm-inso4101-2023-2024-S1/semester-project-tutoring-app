import { Pressable, Text, StyleSheet, View } from "react-native";

export default function PastActiveCourseButton({ onPress, status }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Toggle {status === "Active" ? "Past" : "Active"} Courses</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#674886",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
