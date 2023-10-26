import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

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
    toggleSnackbar();
  }

  return (
    <View>
      <Text>Sign up</Text>

      <View>
        <TextInput
          placeholder="First Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <View>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <TextInput
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity onPress={handleSignUp}>
        <View>
          <Text>Sign Up</Text>
        </View>
      </TouchableOpacity>

      {showSnackbar && (
        <View>
          <Text>{"SnackBarMessage"}</Text>
          <TouchableOpacity onPress={toggleSnackbar}>
            <Text>✖️</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SignUp;
