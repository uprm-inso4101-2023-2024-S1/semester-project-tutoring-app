import React from "react";
import { View, Image } from "react-native";

export default function StarRating({ rating }) {
    // TODO(): Showing half a star could also be nice
    return (
        <View style={{ flexDirection: 'row' }}>
            {[...Array(5)].map((_, index) => {
                const star_icon = Math.round(rating) <= index
                    ? require("../../assets/star_icon_black.png")
                    : require("../../assets/star_icon_yellow.png");
                return (
                    <Image
                        key={index}
                        source={star_icon}
                        aria-label='star'
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                );
            })}
        </View>
    );
}
