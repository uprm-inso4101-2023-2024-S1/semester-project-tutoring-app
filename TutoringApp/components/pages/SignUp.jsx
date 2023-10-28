import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
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
  
  const headingText = "Sign Up";
  const buttonMessage = "Sign up";

  const invalidStatus = -1;
  const defaultStatus = 0;
  const validStatus = 1;

  const [nameStatus, setNameStatus] = useState(defaultStatus);
  const [lastNameStatus, setLastNameStatus] = useState(defaultStatus);
  const [emailStatus, setEmailStatus] = useState(defaultStatus);
  const [passwordStatus, setPasswordStatus] = useState(defaultStatus);

  function toggleSnackbar() {
    setShowSnackbar(!showSnackbar);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function getValidationErrors() {
    const validationErrors = [];

    if (!isValidNameOrLastName(name)) {
      setNameStatus(invalidStatus);
      validationErrors.push(invalidNameMessage);
    } else {
      setNameStatus(validStatus);
    }
    if (!isValidNameOrLastName(lastName)) {
      setLastNameStatus(invalidStatus);
      validationErrors.push(invalidLastNameMessage);
    } else {
      setLastNameStatus(validStatus);
    }
    if (!isValidEmail(email)) {
      setEmailStatus(invalidStatus);
      validationErrors.push(invalidEmailMessage);
    } else {
      setEmailStatus(validStatus);
    }
    if (!isValidPassword(password, confirmPassword)) {
      setPasswordStatus(invalidStatus);
      validationErrors.push(invalidPasswordMessage);
    } else {
      setPasswordStatus(validStatus);
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
      <Text style={styles.heading}>{headingText}</Text>

      <View style={styles.nameAndLastNameContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                nameStatus === validStatus
                  ? COLORS.BORDERS.valid
                  : nameStatus === invalidStatus
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="First Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setNameStatus(defaultStatus);
          }}
        />

        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                lastNameStatus === validStatus
                  ? COLORS.BORDERS.valid
                  : lastNameStatus === invalidStatus
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => {
            setLastName(text);
            setLastNameStatus(defaultStatus);
          }}
        />
      </View>

      <TextInput
        style={[
          styles.emailInput,
          {
            borderColor:
              emailStatus === validStatus
                ? COLORS.BORDERS.valid
                : emailStatus === invalidStatus
                ? COLORS.BORDERS.invalid
                : COLORS.BORDERS.default,
          },
        ]}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailStatus(defaultStatus);
        }}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                passwordStatus === validStatus
                  ? COLORS.BORDERS.valid
                  : passwordStatus === invalidStatus
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordStatus(defaultStatus);
          }}
          secureTextEntry={!showPassword}
        />

        <TextInput
          style={[
            styles.inputHalf,
            {
              borderColor:
                passwordStatus === validStatus
                  ? COLORS.BORDERS.valid
                  : passwordStatus === invalidStatus
                  ? COLORS.BORDERS.invalid
                  : COLORS.BORDERS.default,
            },
          ]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setPasswordStatus(defaultStatus);
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
          <Text style={styles.buttonText}>{buttonMessage}</Text>
        </View>
      </TouchableOpacity>

      {showSnackbar && (
        <View style={styles.snackbar}>
          <Text>{snackbarMessage}</Text>
          <Feather
            name="x-circle"
            size={SIZES.xLarge}
            color={COLORS.tertiary}
            marginLeft={10}
            height={SIZES.xLarge}
            onPress={toggleSnackbar}
          />
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
    borderWidth: 1,
    marginRight: 5,
  },
  emailInput: {
    width: 375,
    marginBottom: SIZES.medium,
    padding: SIZES.small,
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
    flexDirection: "row",
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
  },
  snackbarDismiss: {
    textAlign: "right",
  },
});

export default SignUp;
