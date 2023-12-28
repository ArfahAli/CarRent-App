import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const SettingsScreen = ({ navigation }) => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const faqList = [
    { id: '1', question: 'How do I rent a car?', answer: 'Simply go to the Home screen and browse available cars. Click on a car to view details and rent.' },
    { id: '2', question: 'What is the rental duration?', answer: 'The rental duration is typically per day. You can check the specific details for each car.' },
    { id: '3', question: 'Can I extend the rental period?', answer: 'Yes, you can extend the rental period if the car is available. Please contact customer support for assistance.' },
    // Add more FAQs as needed
  ];

  const toggleFaq = (faqId) => {
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  const renderFaqItem = ({ item, index }) => {
    const isEven = index % 2 === 0;
    const backgroundColor = isEven ? '#f0f0f0' : '#ffffff';

    return (
      <TouchableOpacity
        onPress={() => toggleFaq(item.id)}
        style={[styles.faqItemContainer, { backgroundColor }]}
      >
        <Text style={styles.faqQuestion}>{item.question}</Text>
        {openFaqId === item.id ? <Text style={styles.arrow}>▼</Text> : <Text style={styles.arrow}>▶</Text>}
        {openFaqId === item.id && <Text style={styles.faqAnswer}>{item.answer}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="ios-arrow-back" size={24} color="blue" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Account Section */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Account</Text>
        <Text style={styles.cardItem}>Change Password</Text>
        <Text style={styles.cardItem}>Update Profile</Text>
      </View>

      {/* Notifications Section */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Notifications</Text>
        <Text style={styles.cardItem}>Push Notifications</Text>
        <Text style={styles.cardItem}>Email Notifications</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    padding: 16,
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.2, // for iOS shadow
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  faqItemContainer: {
    backgroundColor: '#f0f0f0', // Set a default background color
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  arrow: {
    fontSize: 18,
  },
  faqAnswer: {
    fontSize: 14,
    marginTop: 8,
    color: '#555555',
  },
});

export default SettingsScreen;
