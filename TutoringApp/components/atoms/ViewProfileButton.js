import React from 'react';
import Button from './ButtonTemplate';

const ViewProfileButton = () => {
    return (
        <Button 
        text="View Profile" 
        color="#674886" 
        onPress={() => alert('Button Pressed')} 
        buttonStyle={{ width: 120, height: 40 }} 
        />
    );
}

export default ViewProfileButton;