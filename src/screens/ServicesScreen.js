// ServicesScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const ServicesScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="ios-arrow-back" size={24} color="blue" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Car Rental Services</Text>
      </View>

      <View style={styles.cardContainer}>
        {/* Car Rentals */}
        <ServiceCard
          title="Car Rentals"
          description="The primary service is renting out vehicles for short-term use, ranging from a few hours to several weeks."
          imageSource={{ uri: 'https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        />

        {/* Vehicle Selection */}
        <ServiceCard
          title="Vehicle Selection"
          description="Customers can choose from a variety of vehicles, including compact cars, sedans, SUVs, vans, and sometimes even luxury or specialty vehicles."
          imageSource={{ uri: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        />
      </View>

      <View style={styles.cardContainer}>
        {/* Airport Services */}
        <ServiceCard
          title="Airport Services"
          description="Many rental car companies have counters at airports, making it convenient for travelers to rent a car upon arrival."
          imageSource={{ uri: 'https://images.pexels.com/photos/691595/pexels-photo-691595.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        />

        {/* Online Reservations */}
        <ServiceCard
          title="Online Reservations"
          description="Customers can often make reservations through the company's website or mobile app, allowing them to plan ahead and secure a vehicle."
          imageSource={{ uri: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        />
      </View>

      <View style={styles.cardContainer}>
        {/* In-Person Reservations */}
        <ServiceCard
          title="In-Person Reservations"
          description="Some customers prefer to make reservations in person at rental car offices."
          imageSource={{ uri: 'https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        />

        {/* New Service */}
        <ServiceCard
          title="Special Services"
          description="This is a new service description."
          imageSource={{ uri: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600' }} // Replace with the actual image URL
        />
      </View>
    </ScrollView>
  );
};

const ServiceCard = ({ title, description, imageSource }) => (
  <View style={styles.serviceCard}>
    <Image source={imageSource} style={styles.serviceImage} />
    <Text style={styles.serviceTitle}>{title}</Text>
    <Text style={styles.serviceDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  serviceCard: {
    width: '48%', // Adjust the width as needed
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.2, // for iOS shadow
  },
  serviceImage: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
});

export default ServicesScreen;
