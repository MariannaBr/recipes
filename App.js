import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TabNavigator from "./navigation/TabNavigator";
import { useScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";

useScreens();

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <HomeScreen />
      </View>
    </NavigationContainer>
  );
}
