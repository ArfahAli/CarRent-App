import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Pressable } from "react-native";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { auth, db } from "../config/firebase";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    if (!username || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create a new user with email and password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );

      // Save user data to Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        username: username,
        userpass: password,
        // Add other user data if needed
      });

      // Navigate to the login screen after signup
      navigation.replace("Login");
    } catch (error) {
      // Handle signup error
      console.error("Signup Error:", error.code, error.message);
      setError("Error signing up. Please try again.");
    }
  };

  const navigateToLogin = () => {
    navigation.replace("Login");
  };

  return (
    <ImageBackground source={{ uri: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600" }}
     style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Signup</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your Email"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Confirm your password"
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <Pressable style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
        <TouchableOpacity style={styles.loginLink} onPress={navigateToLogin}>
          <Text style={styles.loginText}>Have an account! Login here</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity here
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    color: "white", // Adjust text color for better visibility
  },
  inputContainer: {
    marginBottom: 16,
    width: "80%",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "white", // Adjust text color for better visibility
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    backgroundColor: "white", // Adjust background color for better visibility
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    width:"60%",
    marginTop: 16,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
  },
  error: {
    color: "white",
    marginTop: 10,
  },
  loginLink: {
    marginTop: 10,
  },
  loginText: {
    color: "white",
    fontSize: 14,
  },
});

export default Signup;
