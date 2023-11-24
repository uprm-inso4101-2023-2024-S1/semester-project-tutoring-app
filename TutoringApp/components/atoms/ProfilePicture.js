import React from "react";
import { Image } from "react-native";

// If the image to be loaded is local pass the imageSource as 'require(/your/image/path)'.

export default function ProfilePicture({ size, imageSource }) {
    imageSource = imageSource || require('../../assets/test_default_profile_picture.jpg');
    const isRemoteImage = imageSource.startsWith("http://") || imageSource.startsWith("https://");
    return (
        <Image
            source={isRemoteImage ? { uri: imageSource } : imageSource}
            style={{
                height: size ? size : 100,
                width: size ? size : 100,
                borderRadius: 50
            }}
            props={{
                resizeMode: 'cover',
            }}
        />
    );
}
