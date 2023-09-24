import React from 'react';
import { ScrollView } from 'react-native';
import TutorSummary from '../organisms/TutorSummary';
import Qualifications from '../molecules/Qualifications';
import AvailabilitySchedule from '../molecules/AvailabilitySchedule';

const TutorProfilePage = () => {
    return (
        <ScrollView>
            <TutorSummary />
            <Qualifications qualifications={['Degree in X', 'Certification in Y']} />
            <AvailabilitySchedule schedule={[{ day: 'Monday', time: '10am - 2pm' }]} />
            {/* Other components */}
        </ScrollView>
    );
};

export default TutorProfilePage;