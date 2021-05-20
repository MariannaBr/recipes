import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Colors } from "../constants/Colors";

const MealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Meals</Text>
      <Button title="Details" onPress={() => props.navigation.navigate("MealDetail")} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: Colors.primaryColor,
  },
});

export default MealsScreen
