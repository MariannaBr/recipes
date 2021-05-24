import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Colors } from "../constants/Colors";
import MealList from "../Components/MealList";
import { MEALS } from "../data/RecipesData";

const MealsScreen = ({route}) => {

  const MealsToShow = route.params?.group === "salt" ? MEALS.filter(meal => meal.isSalt == true) : MEALS.filter(meal => meal.isSalt == false)

  return (
    <View style={styles.screen}>
      <MealList listData={MealsToShow} />
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

export default MealsScreen;
