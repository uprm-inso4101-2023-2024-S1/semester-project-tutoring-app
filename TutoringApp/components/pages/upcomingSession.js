import { View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import SessionCard from "../atoms/sessionCard";
import MeetButton from "../atoms/googleMeetButton";
import CancelSessionButton from "../atoms/cancelSessionButton";
import SessionTimeDetails from "../atoms/sessionTimeDetails";

const { width, height } = Dimensions.get('window');

/* TODO: OnPress for CourseCardComponent should call UpcomingSession with the required arguments:
    - tutor (string) 
    - google meet link (string)
    - startDate (string)
    - endDate (string)
    - startTime (string)
    - endTime (string)
    - courseImage (string to path of image (or URL))
*/

const UpcomingSession = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <SessionCard {...props} />
            </View>
            <View style={styles.bottomDetails}>
                <View style={styles.sessionTime}>
                    <SessionTimeDetails {...props} />
                </View>
                <View style={styles.horizontalSpacer} />
                <View style={styles.buttons}>
                    <MeetButton style={styles.meetButton} {...props} />
                    <CancelSessionButton />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    card: {
        width: '100%',
        height: '45%',
        paddingBottom: '5%',
        alignSelf: 'center',
    },
    bottomDetails: {
        height: '100%',
        alignSelf: 'center',
        width: '100%',
    },
    sessionTime: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: '4%',
    },
    horizontalSpacer: {
        alignSelf: 'center',
        height: 3,
        width: '90%',
        backgroundColor: '#909090',
        borderRadius: 20,
    },
    buttons: {
        paddingTop: '5%',
        alignSelf: 'auto',
        width: '100%',
        height: '30%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default UpcomingSession;