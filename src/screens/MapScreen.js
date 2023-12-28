import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const MapScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderRentalLocation = (location) => {
    return (
      <View key={location.id} style={styles.locationContainer}>
        <Text style={styles.locationName}>{location.name}</Text>
        <Text>{location.address}</Text>
        <Text>Availability: {location.available ? 'Available' : 'Not Available'}</Text>
        <TouchableOpacity onPress={() => handleLocationClick(location)}>
          <Text style={styles.moreInfoText}>More Info</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleLocationClick = (location) => {
    // Handle click on a location, e.g., show details in a modal
    console.log(`Clicked on ${location.name}`);
  };

  const rentalLocations = [
    { id: 1, name: 'Airport Counter', address: 'Airport Terminal, City', available: true },
    { id: 2, name: 'Downtown Office', address: '123 Main Street, Downtown', available: false },
    // Add more locations as needed
  ];

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="ios-arrow-back" size={24} color="blue" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Rental Locations</Text>
      </View>

      <View style={styles.content}>
        {rentalLocations.map(renderRentalLocation)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '80%',
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  moreInfoText: {
    color: 'blue',
    marginTop: 5,
  },
});

export default MapScreen;
