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

  const [nameStatus, setNameStatus] = useState(0);
  const [lastNameStatus, setLastNameStatus] = useState(0);
  const [emailStatus, setEmailStatus] = useState(0);
  const [passwordStatus, setPasswordStatus] = useState(0);

  function toggleSnackbar() {
    setShowSnackbar(!showSnackbar);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function getValidationErrors() {
    const validationErrors = [];

    if (!isValidNameOrLastName(name)) {
      setNameStatus(-1);
      validationErrors.push(invalidNameMessage);
    } else {
      setNameStatus(1);
    }
    if (!isValidNameOrLastName(lastName)) {
      setLastNameStatus(-1);
      validationErrors.push(invalidLastNameMessage);
    } else {
      setLastNameStatus(1);
    }
    if (!isValidEmail(email)) {
      setEmailStatus(-1);
      validationErrors.push(invalidEmailMessage);
    } else {
      setEmailStatus(1);
    }
    if (!isValidPassword(password, confirmPassword)) {
      setPasswordStatus(-1);
      validationErrors.push(invalidPasswordMessage);
    } else {
      setPasswordStatus(1);
    }
    return validationErrors;
  }

  function handleSignUp() {
    const validationErrors = getValidationErrors();

    if (validationErrors.length > 0) {
      setSnackbarMessage(validationErrors.join("\n"));
    } else {
      /** TODO: Manejar el registro de usuario aquí */
      setSnackbarMessage(validMessage);
    }
    toggleSnackbar();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign up</Text>

      <View style={styles.nameAndLastNameContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                nameStatus === 1
                  ? COLORS.BORDERS.valid
                  : nameStatus === -1
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="First Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setNameStatus(0);
          }}
        />

        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                lastNameStatus === 1
                  ? COLORS.BORDERS.valid
                  : lastNameStatus === -1
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => {
            setLastName(text);
            setLastNameStatus(0);
          }}
        />
      </View>

      <TextInput
        style={[
          styles.emailInput,
          {
            borderColor:
              emailStatus === 1
                ? COLORS.BORDERS.valid
                : emailStatus === -1
                ? COLORS.BORDERS.invalid
                : COLORS.BORDERS.default,
          },
        ]}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailStatus(0);
        }}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                passwordStatus === 1
                  ? COLORS.BORDERS.valid
                  : passwordStatus === -1
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordStatus(0);
          }}
          secureTextEntry={!showPassword}
        />

        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                passwordStatus === 1
                  ? COLORS.BORDERS.valid
                  : passwordStatus === -1
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setPasswordStatus(0);
          }}
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
    // borderColor: COLORS.gray,
    borderWidth: 1,
    marginRight: 5,
  },
  emailInput: {
    width: 375,
    marginBottom: SIZES.medium,
    padding: SIZES.small,
    // borderColor: COLORS.gray,
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
