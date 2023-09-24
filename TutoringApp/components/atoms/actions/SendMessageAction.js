import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SendMessageAction = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>Message</Text>
        </TouchableOpacity>
    );
};

export default SendMessageAction;