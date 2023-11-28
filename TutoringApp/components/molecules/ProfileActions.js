import { View } from "react-native"

import EditProfileAction from "../atoms/actions/EditProfileAction";
import SendMessageAction from "../atoms/actions/SendMessageAction";

/**
 * Component that contains and displays actions for the profile page.
 *
 * @returns {JSX.Element} ProfileActions Component
 */
const ProfileActions = () => {
    return (
        <View>
            <EditProfileAction />
            <SendMessageAction />
            {/* And any other action */}
        </View>
    );
};

export default ProfileActions;
