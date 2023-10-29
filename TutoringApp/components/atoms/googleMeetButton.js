import React from 'react';
import Button from './ButtonTemplate';

const MeetButton = (props) => {
    return (
        <Button
        text="Join with Google Meet"
        color="#4285F4"
        onPress={() => Linking.openURL(props.link)}
        />
    );
};

export default MeetButton;