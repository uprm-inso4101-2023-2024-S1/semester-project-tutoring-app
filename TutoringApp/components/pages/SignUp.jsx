import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";

function isValidNameOrLastName(nameOrLastName) {
  return /^[A-Za-z\s'-]{1,50}$/.test(nameOrLastName);
}

function isValidEmail(email) {
  return (
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
    email.length <= 100
  );
}

function isValidPassword(password, confirmPassword) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  return (
    password.length >= 8 &&
    password === confirmPassword &&
    hasUppercase &&
    hasNumber &&
    hasSpecialChar
  );
}

const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const validMessage = "Valid Message";
  const invalidNameMessage = "Invalid Name Message";
  const invalidLastNameMessage = "Invalid Last Name Message";
  const invalidEmailMessage = "Invalid Email Message";
  const invalidPasswordMessage = "Invalid Password Message";

  function toggleSnackbar() {
    setShowSnackbar(!showSnackbar);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function getValidationErrors() {
    const validationErrors = [];
    if (!isValidNameOrLastName(name)) {
      validationErrors.push(invalidNameMessage);
    }
    if (!isValidNameOrLastName(lastName)) {
      validationErrors.push(invalidLastNameMessage);
    }
    if (!isValidEmail(email)) {
      validationErrors.push(invalidEmailMessage);
    }
    if (!isValidPassword(password, confirmPassword)) {
      validationErrors.push(invalidPasswordMessage);
    }
    return validationErrors;
  }

  function handleSignUp() {
    const validationErrors = getValidationErrors();

    if (validationErrors.length > 0) {
      setSnackbarMessage(validationErrors.join("\n"));
    } else {
      /** TODO Manage user register here */
      setSnackbarMessage(validMessage);
    }
    toggleSnackbar();
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
          secureTextEntry={!showPassword}
        />

        <TextInput
          style={styles.inputHalf}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={!showPassword}
        />

        <MaterialCommunityIcons
          style={styles.icon}
          size={SIZES.xLarge}
          name={showPassword ? "eye-off" : "eye"}
          onPress={toggleShowPassword}
        />
      </View>

      <TouchableOpacity onPress={handleSignUp}>
        <View style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      {showSnackbar && (
        <View style={styles.snackbar}>
          <Text>{snackbarMessage}</Text>
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
  icon: {
    color: COLORS.tertiary,
    marginLeft: 10,
    height: SIZES.xLarge,
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
