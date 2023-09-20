import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Slidder() {
  return (
    <ScrollView style={styles.scrollview}>
        <Text>ScrollView</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   scrollview: {
    flex: 1,
   } 
});