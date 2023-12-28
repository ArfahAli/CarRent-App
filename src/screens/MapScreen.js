import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase'; // Update the path as per your project structure

const RentedCarsScreen = () => {
  const [rentedCars, setRentedCars] = useState([]);

  useEffect(() => {
    fetchRentedCars();
  }, []);

  const fetchRentedCars = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'rentedCars'));
      const cars = [];
      querySnapshot.forEach((doc) => {
        cars.push({ id: doc.id, ...doc.data() });
      });
      setRentedCars(cars);
    } catch (error) {
      console.error('Error fetching rented cars:', error);
    }
  };

  const handleUnrent = async (carId) => {
    await deleteDoc(doc(db, 'rentedCars', carId));
    fetchRentedCars(); // Refresh the list of rented cars
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Rented Cars</Text>
      {rentedCars.map((car) => (
        <View key={car.id} style={styles.card}>
          <Text style={styles.title}>{car.make} {car.model}</Text>
          <Text style={styles.text}>Price per day: ${car.price_per_day}</Text>
          <Text style={styles.text}>Rented Date: {car.rentedDate}</Text>
          <TouchableOpacity style={styles.unrentButton} onPress={() => handleUnrent(car.id)}>
            <Text style={styles.unrentButtonText}>Unrent</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: 'gray',
  },
  unrentButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  unrentButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  // Additional styles can be added as needed
});

export default RentedCarsScreen;
