import { Pressable, Text, StyleSheet, View } from "react-native";

export default function ViewProfileButton() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => alert("Button Pressed")}>
                <Text style={styles.buttonText}>View Profile</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 90,
        height: 30,
        borderRadius: 5,
        backgroundColor: "#674886",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    },
});
