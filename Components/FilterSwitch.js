import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { Colors } from "../constants/Colors";
import { setFilters } from "../store/actions/mealsActions";

const FilterSwitch = (props) => {
  return (
    <View style={styles.switchContainer}>
      <Text>{props.title}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor, false: "gray" }}
        thumbColor={Platform.OS === "android" ? Colors.secondaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const Filters = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };

    console.log("applied filters", appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

  useEffect(() => {
    saveFilters();
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Vyberte filtre</Text>
      </View>
      <View style={styles.filtersContainer}>
        <FilterSwitch
          title="Bezlepkový"
          state={isGlutenFree}
          onChange={(newValue) => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          title="Vegánsky"
          state={isVegan}
          onChange={(newValue) => setIsVegan(newValue)}
        />
        <FilterSwitch
          title="Vegetariánsky"
          state={isVegetarian}
          onChange={(newValue) => setIsVegetarian(newValue)}
        />
        <FilterSwitch
          title="Bezlaktózový"
          state={isLactoseFree}
          onChange={(newValue) => setIsLactoseFree(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: 220,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: Colors.primaryColor,
    marginVertical: 20,
  },
  filtersContainer: {
    height: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
  },
});

export default Filters;
