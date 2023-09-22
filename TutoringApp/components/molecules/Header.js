import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header({text, container_width, container_height, font_size}) {
  return (
    <View style={{width: container_width,height: container_height,...styles.header}}>
        <Text style={{fontSize: font_size,...styles.home}}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
   header: {
    alignItems: 'left',
    justifyContent: 'flex-end',
    backgroundColor: '#eee'

   },
   home: {
    fontWeight: 'bold',
    padding: 10
   } 
});