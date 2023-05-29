import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInPage from "../screens/SignInPage";
import MainScreen from "../screens/MainScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignInPage" component={SignInPage}></Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;