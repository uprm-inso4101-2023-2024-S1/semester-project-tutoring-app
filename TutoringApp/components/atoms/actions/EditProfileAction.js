import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const EditProfileAction = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>Edit Profile</Text>
        </TouchableOpacity>
    );
};

export default EditProfileAction;