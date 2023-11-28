import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";
import SignUp from "../atoms/SignUp";
import SignIn from "../atoms/SignIn";

/**
 * Represents a component that allows users to sign up or sign in.
 * It provides a user interface to toggle between the sign-up and sign-in forms.
 *
 * @returns {JSX.Element} render - The JSX representation of the Sign component.
 */
const Sign = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{showSignUp ? "Sign Up" : "Sign In"}</Text>
      <View style={styles.formContainer}>
        {showSignUp ? <SignUp /> : <SignIn />}
      </View>
      <View style={styles.toggleButtonContainer}>
        <TouchableOpacity onPress={toggleForm}>
          <View style={styles.switcher}>
            <Text style={styles.buttonText}>
              {showSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    margin: SIZES.medium,
  },
  formContainer: {
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
  },
  toggleButtonContainer: {
    marginTop: SIZES.medium,
  },
  switcher: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Sign;
