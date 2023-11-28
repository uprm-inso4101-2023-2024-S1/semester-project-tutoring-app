import { View } from "react-native"

import TutoringSessionsList from "../molecules/TutoringSessionsList";

/**
 * Component that contains and displays multiple TutoringSessionsList in user"s profile.
 *
 * @returns {JSX.Element} TutoringSessionsBoard Component
 */
const TutoringSessionsBoard = () => {
    return (
        <View>
            {/* Ongoing */}
            <TutoringSessionsList />

            {/* Completed */}
            <TutoringSessionsList />
        </View>
    );
};

export default TutoringSessionsBoard;
