import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import MealList from "../Components/MealList";
import Filters from "../Components/FilterSwitch";
import { useSelector } from "react-redux"

const FavoritesScreen = (props) => {

  const { route, navigation } = props

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const filteredMeals = useSelector(state => state.meals.filteredMeals)

  const MealsToShow = favoriteMeals.filter((meal) => filteredMeals.includes(meal))

  if (MealsToShow.length === 0 || !MealsToShow) {
    return (
      <View style={styles.noMealsScreen}>
        <Text style={styles.noMealsText}>
          0 nájdenych receptov
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Filters navigation={navigation} />
      <View style={styles.listContainer}>
        <MealList listData={MealsToShow} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //alignItems: "center",
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
  },
  noMealsScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noMealsText: {
    color: Colors.primaryColor,
    fontWeight: "bold",
    fontSize: 24
  }
});

export default FavoritesScreen;
