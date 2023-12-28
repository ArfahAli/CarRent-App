import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FAQScreen = () => {
  const faqData = [
    {
      question: "How can I rent a car?",
      answer:
        'You can rent a car by navigating to the "Rent a Car" section in the app and choosing your preferred car. Click on a car to view details and rent.',
    },
    {
      question: "What documents do I need for car rental?",
      answer:
        "To rent a car, you typically need a valid driver's license, proof of insurance, and a credit card for payment. Additional requirements may vary by location.",
    },
    {
      question: "Can I extend the rental period?",
      answer:
        "Yes, you can extend the rental period if the car is available. Please contact customer support for assistance.",
    },
    {
      question: "What types of cars are available for rent?",
      answer:
        'We offer a variety of cars, including sedans, SUVs, and more. You can browse the available cars in the "Rent a Car" section.',
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards and digital wallets. You can securely pay for your car rental through the app.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>FAQ / Help Center</Text>

        {faqData.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => toggleAnswer(index)}
          >
            <View
              style={[
                styles.faqItem,
                expandedIndex === index && styles.faqItemExpanded,
              ]}
            >
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{item.question}</Text>
                <Icon
                  name={expandedIndex === index ? "chevron-up" : "chevron-down"}
                  size={14}
                  color="white"
                />
              </View>
              {expandedIndex === index && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 2,
    color: "black",
  },
  faqItem: {
    marginBottom: 20,
    backgroundColor: "black",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  faqItemExpanded: {
    backgroundColor: "#353935",
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  answer: {
    fontSize: 16,
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default FAQScreen;
