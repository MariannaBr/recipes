import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Colors } from "../constants/Colors";
import MealList from "../Components/MealList";
import Filters from "../Components/FilterSwitch";
import { useSelector } from "react-redux"

const MealsScreen = (props) => {

  const { route, navigation } = props

  const filteredMeals = useSelector(state => state.meals.filteredMeals)

  const MealsToShow =
    route.params?.group === "salt"
      ? filteredMeals.filter((meal) => meal.isSalt == true)
      : filteredMeals.filter((meal) => meal.isSalt == false);

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
});

export default MealsScreen;
