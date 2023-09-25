import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";


export default function PreviousCourses(props) {
    return (
        // Hardcoded values for now, should be replaced with defined properties
        // of the passed parameter. Ideally, whenever a course is pressed, some
        // of its properties are stored into a list or container and would be  
        // iterated upon and used here.
        <View>
            <Text style={styles.titleStyle}>Previous Courses</Text>

            <ImageBackground style={styles.CardContainer}>
                <Pressable onPress={props.onPress}>
                <Image source={props.previousCourse} style={styles.imageStyleTop}/>
                <View style={styles.textContainerTop}>
                    <Text style={styles.textStyle}>{props.prevCourseName} with {props.prevcourseTutor}</Text>
                </View>
                </Pressable>

                <Pressable onPress={props.onPress2}>
                <Image source={props.previousCourse2} style={styles.imageStyleMid}/>
                <View style={styles.textContainerMid}>
                    <Text style={styles.textStyle}>{props.prevCourseName2} with {props.prevcourseTutor2}</Text>
                </View>
                </Pressable>

                <Pressable onPress={props.onPress3}>
                <Image source={props.previousCourse3} style={styles.imageStyleBot}/>
            
                <View style={styles.textContainerBot}>
                    <Text style={styles.textStyle}>{props.prevCourseName3} with {props.prevcourseTutor3}</Text>
                </View>
                </Pressable>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
        imageStyleTop: {
            borderRadius: '0px',
            height: 85,
            opacity: 0.7,
            width: 150
        },
        imageStyleMid: {
            borderRadius: '0px',
            height: 85,
            opacity: 0.7,
            width: 150
        },
        imageStyleBot: {
            borderRadius: '0px',
            height: 85,
            opacity: 0.7,
            width: 150
        },
        textContainerTop: {
            position: 'absolute',
            justifyContent: 'flex-end',
            height: 80,
            left: 10,
            up: 10,
            width: 100
        },
        textContainerMid: {
            position: 'absolute',
            justifyContent: 'flex-end',
            height: 80,
            left: 10,
            up: 10,
            width: 100
        },
        textContainerBot: {
            position: 'absolute',
            justifyContent: 'flex-end',
            height: 80,
            left: 10,
            up: 10,
            width: 100
        },
        CardContainer: {
            alignItems: 'stretch',
            backgroundColor: '#000000',
            borderColor: '#fff',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderRadius: '0px',
            position: 'relative',
            height: 260,
            width: 155,
        },
        textStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
        },
        titleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '18px',
            justifyContent: 'center',
            height: 25,
            width: 160,
        }
});
