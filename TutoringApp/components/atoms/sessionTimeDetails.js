import { View, Text, StyleSheet, PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const SessionTimeDetails = (props) => {
    return (
        <View style={styles.sessionDetails}>
            <View style={styles.sessionStart}>
                <Text style={styles.title}>Session Starts:</Text>
                <Text style={styles.date}>{props.startDate}</Text>
                <Text style={styles.time}>{props.startTime}</Text>
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.sessionEnd}>
                <Text style={styles.title}>Session Ends:</Text>
                <Text style={styles.date}>{props.endDate}</Text>
                <Text style={styles.time}>{props.endTime}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sessionDetails: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    sessionStart: {
        justifyContent: "space-around",
    },
    title: {
        fontSize: getFontSize(12),
        fontWeight: "bold",
    },
    date: {
        fontSize: getFontSize(12),
        color: "#909090",
        fontWeight: "600",
    },
    time: {

        fontSize: getFontSize(18),
        fontWeight: "bold",
    },
    verticleLine: {
        height: "100%",
        width: 3,
        backgroundColor: "#909090",
        borderRadius: 20,
    }
});

export default SessionTimeDetails;
