import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { doc, getDoc } from "@firebase/firestore";
import { auth, db } from "../config/firebase";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const submitHandler = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      if (user) {
        navigation.replace("TabNav");
      }
    } catch (error) {
      setError("Invalid username or password!");
    }
  };

  const navigateToSignup = () => {
    navigation.navigate("Signup"); // Assuming 'Signup' is the name of your signup screen
  };

  return (
    <View style={styles.login}>
      <View style={styles.form}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.input}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={username}
            style={styles.inputField}
            placeholder="Enter your Email"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.button} onPress={submitHandler}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupLink}
            onPress={navigateToSignup}
          >
            <Text style={styles.signupText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  form: {
    width: "80%",
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
  },
  action: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  signupLink: {
    marginTop: 10,
  },
  signupText: {
    color: "blue",
    fontSize: 14,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default Login;
