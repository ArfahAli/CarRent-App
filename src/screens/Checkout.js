import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { doc, getDocs, query, collection, where, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const CheckoutScreen = ({ navigation, route }) => {
  const { make, model, price_per_day } = route.params;
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    setCarId(route.params.compositeKey);
  }, [route.params.compositeKey]);
  
  const handleConfirm = async () => {
    try {
      if (!carId) {
        console.error("Car composite key is not available.");
        return;
      }
      
      const rentalData = {
        make,
        model,
        price_per_day,
        rentedDate: new Date().toISOString()
      };
  
      await setDoc(doc(db, "rentedCars", carId), rentalData);
  
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
          <Text style={styles.totalAmount}>${price_per_day * 5}</Text> {/* Assuming 5 days rental */}
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.carInfoText}>Car Info:</Text>
          <Text style={styles.carDetails}>{make} {model}</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  infoBox: {
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  totalAmount: {
    fontSize: 24,
    color: "white",
  },
  carInfoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  carDetails: {
    fontSize: 16,
    color: "white",
  },
  confirmButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: "40%",
    borderRadius: 10,
  },
  confirmButtonText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});

export default CheckoutScreen;
