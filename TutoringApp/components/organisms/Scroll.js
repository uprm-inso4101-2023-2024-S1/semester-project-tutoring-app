import {
    StyleSheet,
    View,
    ScrollView,
} from "react-native";

import RecommendedTutorCard from "../molecules/RecommendedTutorCard";
import CourseCard from "../atoms/CourseCard";

export default function Slider({ components, isRecommendedCard = false, isCourseCard = false }) {
    return (
        <View>
            <ScrollView horizontal={true} style={styles.container}>
                {components.map((elm,index) => {
                    if (isRecommendedCard) {
                        return (
                            <View style = {styles.seperator2} key={index+11}>
                                <View style = {styles.seperator} key={index}/>
                                <RecommendedTutorCard tutor={elm} key={index+1}/>
                            </View>
                        )
                    }
                    if (isCourseCard) {
                        return (
                            <View style = {styles.seperator3}  key={index+12}>
                                <View style = {styles.seperator} key={index+2}/>
                                <CourseCard {...elm} key={index+3}/>
                            </View>
                        )
                    }
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        padding: 5,
    },
    seperator: {
        width: 50
    },
    seperator2: {
        width: 300
    },
    seperator3: {
        width: 250
    }
})
