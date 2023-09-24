import React from 'react';
import { View } from 'react-native';
import EditProfileAction from '../atoms/actions/EditProfileAction';
import SendMessageAction from '../atoms/actions/SendMessageAction';
import commonStyles from '../templates/Styles/CommonStyles';


const ProfileActions = () => {
    return (
        <View style={commonStyles.container}>
            <EditProfileAction style={commonStyles.profileAction} />
            <SendMessageAction style={commonStyles.profileAction} />
        </View>
    );
};

export default ProfileActions;