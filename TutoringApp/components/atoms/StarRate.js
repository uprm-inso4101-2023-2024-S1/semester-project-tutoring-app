import { View, Image } from "react-native";

export default function StarRating({ rating }) {
    return (
        <View style={{ flexDirection: "row" }}>
            {[...Array(5)].map((_, index) => {
                const starIcon = Math.round(rating) <= index
                    ? require("../../assets/star_icon_black.png")
                    : require("../../assets/star_icon_yellow.png");
                return (
                    <Image
                        key={index}
                        source={starIcon}
                        aria-label="star"
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
