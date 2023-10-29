import React from 'react';
import { Text, StyleSheet, TouchableOpacity, PixelRatio, Dimensions } from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Button = ({ text, color, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }, buttonStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  buttonStyle: {
    width: width * 0.5,
    height: height * 0.1,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: getFontSize(16),
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default Button;
