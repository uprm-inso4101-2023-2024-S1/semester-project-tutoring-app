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
  const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);
  return (
    password.length >= 8 &&
    password === confirmPassword &&
    hasUppercase &&
    hasNumber &&
    hasSpecialChar
  );
}

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  const updateForm = (fieldName, value) => {
    setForm({ ...form, [fieldName]: value });
  };

  function toggleSnackbar() {
    setShowSnackbar(!showSnackbar);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function getBorderStyle(status) {
    if (status === validStatus) {
      return COLORS.BORDERS.valid;
    } else if (status === invalidStatus) {
      return COLORS.BORDERS.invalid;
    }
    return COLORS.BORDERS.default;
  }

  function getValidationErrors() {
    const validationErrors = [];

    if (!isValidNameOrLastName(form.name)) {
      setNameStatus(invalidStatus);
      validationErrors.push(invalidNameMessage);
    } else {
      setNameStatus(validStatus);
    }
    if (!isValidNameOrLastName(form.lastName)) {
      setLastNameStatus(invalidStatus);
      validationErrors.push(invalidLastNameMessage);
    } else {
      setLastNameStatus(validStatus);
    }
    if (!isValidEmail(form.email)) {
      setEmailStatus(invalidStatus);
      validationErrors.push(invalidEmailMessage);
    } else {
      setEmailStatus(validStatus);
    }
    if (!isValidPassword(form.password, form.confirmPassword)) {
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
      /** TODO: Manage user register here */
      setSnackbarMessage(validMessage);
    }
    setShowSnackbar(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{headingText}</Text>

      <View style={styles.nameAndLastNameContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(nameStatus) },
          ]}
          placeholder="First Name"
          value={form.name}
          onChangeText={(text) => updateForm("name", text)}
        />

        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(lastNameStatus) },
          ]}
          placeholder="Last Name"
          value={form.lastName}
          onChangeText={(text) => updateForm("lastName", text)}
        />
      </View>

      <TextInput
        style={[
          styles.emailInput,
          { borderColor: getBorderStyle(emailStatus) },
        ]}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => updateForm("email", text)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(passwordStatus) },
          ]}
          placeholder="Password"
          value={form.password}
          onChangeText={(text) => updateForm("password", text)}
          secureTextEntry={!showPassword}
        />

        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(passwordStatus) },
          ]}
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChangeText={(text) => updateForm("confirmPassword", text)}
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
    marginTop: 20,
  },
  snackbarDismiss: {
    textAlign: "right",
  },
});

export default SignUp;
