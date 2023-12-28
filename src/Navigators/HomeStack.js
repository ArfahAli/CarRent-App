import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import InfoScreen from "../screens/InfoScreen";
import CheckoutScreen from "../screens/Checkout";
import HomeScreen from "../screens/HomeScreen";

function HomeStack() {
  return (
    <Stack.Navigator
    // screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen}/>
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
