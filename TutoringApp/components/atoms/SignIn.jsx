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

/**
 * Returns a list of validation errors for the email input.
 * @param {String} email - The email input to validate.
 * @returns {Array} validationErrors - An array of validation error messages.
 */
function getEmailErrors(email) {
  const validationErrors = [];

  if (email.length === 0) {
    validationErrors.push("Invalid Email: The field is empty.");
  } else {
    // TODO: Add validation logic to check if the email is already in the database here
  }
  return validationErrors;
}

/**
 * Returns a list of validation errors for the password input.
 * @param {String} email - The email associated with the password.
 * @param {String} password - The password input to validate.
 * @returns {Array} validationErrors - An array of validation error messages.
 */
function getPasswordErrors(email, password) {
  const validationErrors = [];

  if (password.length === 0) {
    validationErrors.push("Invalid Password: The field is empty.");
  } else {
    // TODO: Get the actual password associated with the email from the database
    const emailPassword = email; // Replace with a password fetched from the database
    if (password !== emailPassword) {
      validationErrors.push("Invalid Password: Passwords do not match.");
    }
  }
  return validationErrors;
}

/**
 * Represents a user sign-in form component.
 * This component includes email and password fields for user authentication.
 *
 * @returns {JSX.Element} render - The JSX representation of the sign-in form.
 */
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const validMessage = "Valid Message";

  const buttonMessage = "Submit";

  const invalidStatus = -1;
  const defaultStatus = 0;
  const validStatus = 1;

  const [emailStatus, setEmailStatus] = useState(defaultStatus);
  const [passwordStatus, setPasswordStatus] = useState(defaultStatus);

  /**
   * Updates the value of a form field.
   * @param {String} fieldName - The name of the form field to update.
   * @param {String} value - The new value for the form field.
   */
  const updateForm = (fieldName, value) => {
    setForm({ ...form, [fieldName]: value });
  };

  /**
   * Toggles the visibility of the password input.
   */
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  /**
   * Returns a specific border color based on the validation status.
   * @param {Number} status - The validation status (valid, invalid, or default).
   * @returns {COLORS.BORDERS} - The appropriate border color.
   */
  function getBorderStyle(status) {
    if (status === validStatus) {
      return COLORS.BORDERS.valid;
    } else if (status === invalidStatus) {
      return COLORS.BORDERS.invalid;
    }
    return COLORS.BORDERS.default;
  }

  /**
   * Returns a list of validation errors for the entire form.
   * @param {useState} form - The form state containing email and password fields.
   * @returns {Array} validationErrors - An array of validation error messages.
   */
  function getValidationErrors(form) {
    const validationErrors = [];

    const emailErrors = getEmailErrors(form.email);
    const passwordErrors = getPasswordErrors(form.email, form.password);

    validationErrors.push(...emailErrors);
    validationErrors.push(...passwordErrors);

    setEmailStatus(emailErrors.length > 0 ? invalidStatus : validStatus);
    setPasswordStatus(passwordErrors.length > 0 ? invalidStatus : validStatus);

    return validationErrors;
  }

  /**
   * Handles the sign-in process, displaying error messages or success messages.
   */
  function handleSignIn() {
    const validationErrors = getValidationErrors(form);

    if (validationErrors.length > 0) {
      setSnackbarMessage(validationErrors.join("\n"));
    } else {
      // TODO: Manage user assign account authentication here
      setSnackbarMessage(validMessage);
    }
    setShowSnackbar(true);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.emailInput,
          { borderColor: getBorderStyle(emailStatus) },
        ]}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => {
          updateForm("email", text);
          setEmailStatus(defaultStatus);
        }}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(passwordStatus) },
          ]}
          placeholder="Password"
          value={form.password}
          onChangeText={(text) => {
            updateForm("password", text);
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

      <TouchableOpacity onPress={handleSignIn}>
        <View style={styles.signInButton}>
          <Text style={styles.buttonText}>{buttonMessage}</Text>
        </View>
      </TouchableOpacity>

      {showSnackbar && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>{snackbarMessage}</Text>

          <MaterialCommunityIcons
            name="close-circle"
            size={24}
            color={COLORS.tertiary}
            onPress={() => setShowSnackbar(false)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 10,
    padding: SIZES.medium,
    ...SHADOWS.medium,
  },
  inputHalf: {
    flex: 1,
    padding: SIZES.small,
    borderWidth: 1,
  },
  emailInput: {
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
  signInButton: {
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
  snackbarText: {
    flex: 1,
    textAlign: "left",
  },
});

export default SignIn;
