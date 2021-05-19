import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Meal Details</Text>
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

export default MealDetailScreen;
