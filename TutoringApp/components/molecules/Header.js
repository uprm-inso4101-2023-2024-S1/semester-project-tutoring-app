import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header({text}) {
  return (
    <View style={styles.header}>
        <Text style={styles.home}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   header: {
    width: '100%',
    height: '15%', 
    alignItems: 'left',
    justifyContent: 'flex-start',
    backgroundColor: '#eee'
   },
   home: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 45
   } 
});