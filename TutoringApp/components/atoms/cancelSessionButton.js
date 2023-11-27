import { View, Text, StyleSheet, TouchableOpacity, PixelRatio, Dimensions } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CancelSessionButton = () => {
    return (
        <TouchableOpacity style={styles.cancelButton}><Text style={styles.text}>Cancel Session</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cancelButton: {
        justifyContent: "center",
        width: width * .5,
        height: height * .1,
        backgroundColor: "#F44242",
        borderRadius: 10,
    },
    text: {
        fontSize: getFontSize(16),
        textAlign: "center",
        color: "#ffffff"
    }

}
)

export default CancelSessionButton;