import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  function toggleSnackbar() {
    setShowSnackbar(!showSnackbar);
  }

  function handleSignUp() {
    toggleSnackbar()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign up</Text>

      <View style={styles.nameAndLastNameContainer}>
        <TextInput
          style={styles.inputHalf}
          placeholder="First Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.inputHalf}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <TextInput
        style={styles.emailInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputHalf}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <TextInput
          style={styles.inputHalf}
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity onPress={handleSignUp}>
        <View style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      {showSnackbar && (
        <View style={styles.snackbar}>
          <Text>{"SnackBarMessage"}</Text>
          <TouchableOpacity onPress={toggleSnackbar}>
            <Text style={styles.snackbarDismiss}>✖️</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginBottom: SIZES.medium,
    color: COLORS.primary,
    fontSize: SIZES.large,
  },
  nameAndLastNameContainer: {
    flexDirection: "row",
    marginBottom: SIZES.medium,
  },
  inputHalf: {
    flex: 1,
    marginBottom: SIZES.small,
    padding: SIZES.small,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginRight: 5,
  },
  emailInput: {
    width: 375,
    marginBottom: SIZES.medium,
    padding: SIZES.small,
    borderColor: COLORS.gray,
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: "row",
    marginBottom: SIZES.medium,
  },
  signUpButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    ...SHADOWS.small,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
  },
  snackbar: {
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
  },
  snackbarDismiss: {
    textAlign: "right",
  },
});

export default SignUp;
