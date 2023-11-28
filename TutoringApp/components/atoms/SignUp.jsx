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
 * Returns a list of validation errors for the name input.
 *
 * @param {String} name - The name input to validate.
 * @returns {Array} validationErrors - An array of validation error messages.
 */
function getNameErrors(name) {
  const validationErrors = [];

  if (name.length === 0) {
    validationErrors.push("Invalid Name: The field is empty.");
  } else {
    if (name.length > 50) {
      validationErrors.push("Invalid Name: The field is too long.");
    }

    if (!/^[A-Za-z\s'-]*$/.test(name)) {
      validationErrors.push("Invalid Name: Invalid characters used.");
    }
  }

  if (validationErrors.length > 1) {
    validationErrors.length = 1;
    validationErrors[0] =
      "Invalid Name: A valid name may contain letters, spaces, and certain special characters (', -, and space).";
  }

  return validationErrors;
}

/**
 * Returns a list of validation errors for the last name input.
 *
 * @param {String} lastName - The last name input to validate.
 * @returns {Array} validationErrors - An array of validation error messages.
 */
function getLastNameErrors(lastName) {
  const validationErrors = [];

  if (lastName.length === 0) {
    validationErrors.push("Invalid Last Name: The field is empty.");
  } else {
    if (lastName.length > 50) {
      validationErrors.push("Invalid Last Name: The field is too long.");
    }

    if (!/^[A-Za-z\s'-]*$/.test(lastName)) {
      validationErrors.push("Invalid Last Name: Invalid characters used.");
    }
  }

  if (validationErrors.length > 1) {
    validationErrors.length = 1;
    validationErrors[0] =
      "Invalid Last Name: A valid last name may contain letters, spaces, and certain special characters (', -, and space).";
  }

  return validationErrors;
}

/**
 * Returns a list of validation errors for the email input.
 *
 * @param {String} email - The email input to validate.
 * @returns {Array} validationErrors - An array of validation error messages.
 */
function getEmailErrors(email) {
  const validationErrors = [];

  const validEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = validEmailPattern.test(email);
  const isEmailWithinLengthLimit = email.length <= 100;

  if (email.length === 0) {
    validationErrors.push("Invalid Email: The field is empty.");
  } else {
    if (!isEmailValid) {
      validationErrors.push("Invalid Email: Invalid email format.");
    }

    if (!isEmailWithinLengthLimit) {
      validationErrors.push("Invalid Email: The email is too long.");
    }
  }

  if (validationErrors.length > 1) {
    validationErrors.length = 1;
    validationErrors[0] =
      "Invalid Email: Please enter a valid email address (e.g., user@example.com).";
  }

  /**
   * TODO: Add validation to check if the email is already in use here
   */

  return validationErrors;
}

/**
 * Returns a list of validation errors for the password input.
 *
 * @param {String} password - The password input to validate.
 * @param {String} confirmPassword - The confirm password input for validation.
 * @returns {Array} validationErrors - An array of validation error messages.
 */
function getPasswordErrors(password, confirmPassword) {
  const validationErrors = [];

  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);

  if (password.length === 0 || confirmPassword.length === 0) {
    validationErrors.push("Invalid Password: The field is empty.");
  } else {
    if (password.length < 8) {
      validationErrors.push(
        "Invalid Password: A valid password must contain at least 8 characters."
      );
    }

    if (password !== confirmPassword) {
      validationErrors.push("Invalid Password: Passwords do not match.");
    }

    if (!hasUppercase || !hasNumber || !hasSpecialChar) {
      validationErrors.push(
        "Invalid Password: A valid password must contain at least one uppercase letter, one number, and one special character."
      );
    }
  }

  if (validationErrors.length > 1) {
    validationErrors.length = 1;
    validationErrors[0] =
      "Invalid Password: A valid password must contain at least 8 characters, one uppercase letter, one number, and one special character.";
  }

  return validationErrors;
}

/**
 * Represents a form to create a user account.
 *
 * @returns {JSX.Element} render - The JSX representation of the sign-up form.
 */
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

  const buttonMessage = "Submit";

  const invalidStatus = -1;
  const defaultStatus = 0;
  const validStatus = 1;

  const [nameStatus, setNameStatus] = useState(defaultStatus);
  const [lastNameStatus, setLastNameStatus] = useState(defaultStatus);
  const [emailStatus, setEmailStatus] = useState(defaultStatus);
  const [passwordStatus, setPasswordStatus] = useState(defaultStatus);

  /**
   * Updates the value of a form field.
   *
   * @param {String} fieldName - The name of the form field to update.
   * @param {String} value - The new value for the form field.
   */
  const updateForm = (fieldName, value) => {
    setForm({ ...form, [fieldName]: value });
  };

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  /**
   * Returns a specific border color related to the current state.
   *
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
   * Returns a list of errors containing the current form for each specified field.
   *
   * @param {useState} form - The form state containing name, last name, email, password, and confirm password fields.
   * @returns {Array} validationErrors - An array of validation error messages.
   */
  function getValidationErrors(form) {
    const validationErrors = [];

    const nameErrors = getNameErrors(form.name);
    const lastNameErrors = getLastNameErrors(form.lastName);
    const emailErrors = getEmailErrors(form.email);
    const passwordErrors = getPasswordErrors(
      form.password,
      form.confirmPassword
    );

    validationErrors.push(...nameErrors);
    validationErrors.push(...lastNameErrors);
    validationErrors.push(...emailErrors);
    validationErrors.push(...passwordErrors);

    setNameStatus(nameErrors.length > 0 ? invalidStatus : validStatus);
    setLastNameStatus(lastNameErrors.length > 0 ? invalidStatus : validStatus);
    setEmailStatus(emailErrors.length > 0 ? invalidStatus : validStatus);
    setPasswordStatus(passwordErrors.length > 0 ? invalidStatus : validStatus);

    return validationErrors;
  }

  /**
   * Manage the sending of registrations:
   * show a popup with errors or register the user account in the system database
   */
  function handleSignUp() {
    const validationErrors = getValidationErrors(form);

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
      <View style={styles.multipleFieldContainer}>
        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(nameStatus) },
          ]}
          placeholder="First Name"
          value={form.name}
          onChangeText={(text) => {
            updateForm("name", text);
            setNameStatus(defaultStatus);
          }}
        />

        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(lastNameStatus) },
          ]}
          placeholder="Last Name"
          value={form.lastName}
          onChangeText={(text) => {
            updateForm("lastName", text);
            setLastNameStatus(defaultStatus);
          }}
        />
      </View>

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

      <View style={styles.multipleFieldContainer}>
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

        <TextInput
          style={[
            styles.inputHalf,
            { borderColor: getBorderStyle(passwordStatus) },
          ]}
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChangeText={(text) => {
            updateForm("confirmPassword", text);
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
  multipleFieldContainer: {
    flexDirection: "row",
    marginBottom: SIZES.medium,
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
  snackbarText: {
    flex: 1,
    textAlign: "left",
  },
});

export default SignUp;
