import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StarRating from '../atoms/StarRate';
import ProfilePicture from '../atoms/ProfilePicture';
import ViewProfileButton from '../atoms/ViewProfileButton';

/*
  Tutor objects to test RecommendedTutorCards
  const tutor = {
    'name' : "Joe Biden",
    'specialty' : "Economics",
    'courses' : ['Intro to Economics', 'Finance'],
    'profile' : require('./assets/test_profile_picture.jpg'),
    'rating' : 4
  };
  const tutor2 = {
    'name' : "Vannesa Ramos",
    'specialty' : "Computer Science",
    'courses' : ['CIIC3081', 'CIIC4020'],
    'profile' : require('./assets/test_profile_picture2.jpg'),
    'rating' : 3.7
  };

  const tutor3 = {
    'name' : "Juan River",
    'specialty' : "English",
    'courses' : ['INGL3010', 'INGL5030'],
    'profile' : '',
    'rating' : 4.7
  };
*/

export default function RecommendedTutorCard({ tutor, size = { width: 250, height: 350 } }) {
    return (
        <View style={[styles.cardContainer, { width: size.width, height: size.height }]}>
            <View style={styles.cardInner}>
                <Text style={styles.textContainer}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{tutor.name + "\n"}</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20 }}>Teaches {tutor.specialty + "\n\n"}</Text>
                    <CourseList courses={tutor.courses} />
                </Text>
                <View style={[styles.starRatingContainer, styles.alignCenter]}>
                    <StarRating rating={tutor.rating} />
                </View>
                <View style={[styles.viewProfileButton, styles.alignCenter]}>
                    <ViewProfileButton />
                </View>
            </View>
            <View style={[styles.profilePictureContainer, styles.alignCenter]}>
                <ProfilePicture imageSource={tutor.profile} />
            </View>
        </View>
    )
}

function CourseList({ courses }) {
    return (
        <>
            {courses.map((course, index) => (
                <Text key={'Course' + index} style={{ fontWeight: '500' }}>
                    {course + '\n'}
                </Text>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        backgroundColor: 'transparent',
    },
    alignCenter: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center'
    },
    cardInner: {
        bottom: 0,
        width: "100%",
        height: "75%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#77D975',
        backgroundColor: 'white',
        position: 'absolute',
    },
    textContainer: {
        marginTop: '20%',
        color: 'black',
        textAlign: 'center'
    },
    starRatingContainer: {
        bottom: '25%',
        width: '100%',
        justifyContent: 'center',
    },
    viewProfileButton: {
        bottom: '6.5%',
        width: '100%',
        justifyContent: 'center'

    },
    profilePictureContainer: {
        width: '100%',
        marginTop: '10%',
        borderRadius: 50,
        alignItems: 'center',
        overflow: 'hidden'
    }
});
