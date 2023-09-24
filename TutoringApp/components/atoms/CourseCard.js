import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function CourseCard({ courseImage = "", courseName = "text here", courseTutor="name here"}) {
    return (
        <Pressable onPress={() => {console.log("tapped!")}}>
            <ImageBackground style={styles.CardContainer}>
                <Image source={courseImage} style={styles.imageStyle}/>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{courseName} with {courseTutor}</Text>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
        imageStyle: {
            borderRadius: '17px',
            height: 108,
            opacity: 0.7,
            width: 195
        },
        textContainer: {
            position: 'absolute',
            justifyContent: 'flex-end',
            height: 100,
            left: 10,
            up: 10,
            width: 100
        },
        CardContainer: {
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderColor: '#fff',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderRadius: '20px',
            position: 'relative',
            height: 113,
            width: 200,
        },
        textStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '20px',
        }
});
