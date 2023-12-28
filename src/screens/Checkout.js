import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import {
  doc,
  getDocs,
  query,
  collection,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

const CheckoutScreen = ({ navigation, route }) => {
  const { make, model, price_per_day } = route.params;
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    const fetchCarId = async () => {
      try {
        const carsCollection = collection(db, "cars");
        const q = query(
          carsCollection,
          where("make", "==", make),
          where("model", "==", model),
          where("price_per_day", "==", price_per_day)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size === 1) {
          const carDocument = querySnapshot.docs[0];
          setCarId(carDocument.id);
        } else {
          console.error(
            "Car not found or multiple cars found with the same details."
          );
        }
      } catch (error) {
        console.error("Error fetching car ID:", error);
      }
    };

    fetchCarId();
  }, [make, model, price_per_day]);

  const calculateTotal = () => {
    const durationInDays = 5; // Replace with the actual duration
    return durationInDays * price_per_day;
  };

  const handleConfirm = async () => {
    try {
      if (!carId) {
        console.error("Car ID is not available.");
        return;
      }

      await deleteDoc(doc(db, "cars", carId));

      alert("Car rented successfully!");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error confirming rental:", error);
    }
  };

  return (
    <ImageBackground source={{ uri: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.infoBox}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>${calculateTotal()}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.carInfoText}>Car Info:</Text>
          <Text style={styles.carDetails}>
            {make} {model}
          </Text>
        </View>
        <Pressable style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </Pressable>
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
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity here
  },
  infoBox: {
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white", // Adjust text color for better visibility
  },
  totalAmount: {
    fontSize: 24,
    color: "green",
    color: "white", // Adjust text color for better visibility
  },
  carInfoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white", // Adjust text color for better visibility
  },
  carDetails: {
    fontSize: 16,
    color: "blue",
    color: "white", // Adjust text color for better visibility
  },
  confirmButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    width:"40%",
    borderRadius: 10,
  },
  confirmButtonText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});

export default CheckoutScreen;
