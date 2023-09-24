import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CourseCard from './components/atoms/CourseCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CourseCard 
        courseImage={require('./assets/data-structures.png')} 
        courseName={'Data Structures'}
        courseTutor={'Paco'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
