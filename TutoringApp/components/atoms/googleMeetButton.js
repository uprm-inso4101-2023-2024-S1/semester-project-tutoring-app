import { Text, StyleSheet, TouchableOpacity, PixelRatio, Dimensions, Linking } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const MeetButton = (props) => {
    return (
        <TouchableOpacity style={styles.meetButton} onPress={() => { Linking.openURL(props.link) }}><Text style={styles.text}>Join with Google Meet</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    meetButton: {
        justifyContent: "center",
        width: width * 0.5,
        height: height * 0.1,
        backgroundColor: "#4285F4",
        color: "#4285F4",
        borderRadius: 10,
    },
    text: {
        fontSize: getFontSize(16),
        textAlign: "center",
        color: "#ffffff"
    }

}
)

export default MeetButton;
