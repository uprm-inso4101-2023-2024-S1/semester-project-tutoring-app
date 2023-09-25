import React from 'react';
import { Image, View } from 'react-native';
import pfp from "../../../assets/pfp.png";

const ProfilePic = () => {
   return (
      <View>
         <Image
            source={pfp}
            style={{
               width: 100,
               height: 100,
               borderRadius: 100,
            }}
         />
      </View>
   );
};

export default ProfilePic;
