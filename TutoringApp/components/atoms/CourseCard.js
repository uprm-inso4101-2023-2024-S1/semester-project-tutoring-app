import React from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

 
export default function CourseCard(props) {
    const navigation = useNavigation()
    return (
        <Pressable onPress={()=> navigation.navigate('UpcomingSession', {...props})}>
            <ImageBackground style={styles.CardContainer}>
                <Image source={props.courseImage} style={styles.imageStyle}/>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{props.courseName} with {props.courseTutor}</Text>
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
            borderColor: 'black',
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
