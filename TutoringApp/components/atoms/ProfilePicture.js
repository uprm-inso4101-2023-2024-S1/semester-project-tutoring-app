import { View, Image, StyleSheet } from "react-native";

/**
 * Component that handles (display and edit) the user"s profile picture.
 *
 * @returns {JSX.Element} ProfilePicture Component
 */
const ProfilePicture = ({ imagePath }) => {
  return (
    <View style={styles.container}>
      <Image
        // source={{uri : (imagePath)}} // You can use "require" for local images
        source={imagePath}
        style={styles.image}
        resizeMode="cover" // You can change resizeMode to fit your UI requirements
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200, // Adjust the width and height as per your UI design
    height: 200,
    borderRadius: 100, // To make it a circular profile picture
    overflow: "hidden", // Clip the image to the borderRadius
    borderWidth: 5,
    borderColor: "gray"
  },
  image: {
    flex: 1, // Make the image expand to fill the container
    width: null, // Reset width and height to make it responsive
    height: null,
  },
});

export default ProfilePicture;
