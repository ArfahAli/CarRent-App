import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Seeddata from "./src/seeddata";
import Signup from "./src/screens/Signup";
import Login from "./src/screens/Login";
import TabNav from "./src/Navigators/TabNav";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    Seeddata();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
