import React from 'react';
import Button from './ButtonTemplate';

const PastActiveCourseButton = ({ onPress, status}) => {
    const buttonText = `Toggle ${status === 'Active' ? 'Past' : 'Active'} Courses`;

    return (
        <Button 
        text={buttonText}
        color="#674886" 
        onPress={onPress} 
        buttonStyle={{ width: 180, height: 35 }} 
        />
    );
}

export default PastActiveCourseButton;