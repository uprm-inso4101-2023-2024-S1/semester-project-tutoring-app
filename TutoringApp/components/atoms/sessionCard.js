import { View, Text, StyleSheet, TouchableOpacity, Dimensions, PixelRatio } from "react-native";
import { ImageBackground } from "react-native";
import { Asset } from 'expo-asset';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const SessionCard = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={props.courseImage} style={styles.image}>
                <Text style={styles.text}>Your next session with {props.tutor}!</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        paddingTop: '5%',
        paddingLeft: '3%',
        backgroundColor: '#000000',
        opacity: 0.8,
    },
    text: {
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: getFontSize(42),
        fontWeight: 'bold',
    },
});

export default SessionCard;