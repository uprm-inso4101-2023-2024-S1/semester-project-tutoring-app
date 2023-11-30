import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from "../../constants/theme";

const EditProfileButton = () => {
  return (
    <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editButtonText}>Edit Profile</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default EditProfileButton;
