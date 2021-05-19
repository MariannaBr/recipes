import React from "react";
import { Colors } from "../constants/Colors";
import {
  createBottomTabNavigator,
  createDrawerNavigator,
} from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealsScreen from "../screens/MealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const SaltMealsNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Meals: {
    screen: MealsScreen,
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
});

const SweetMealsNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Meals: {
    screen: MealsScreen,
  },
  MealDetail: {
    screen: MealDetialScreen,
  },
});

const FiltersNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Filters: {
    screen: FiltersScreen,
  },
});

const tabConfig = {
  SaltMeals: {
    screen: SaltMealsNavigator,
    navigationOptions: {
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: <Text>Slane</Text>,
    },
  },
  SweetMeals: {
    screen: SweetMealsNavigator,
    navigationOptions: {
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: <Text>Sladke</Text>,
    },
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: <Text>Filtre</Text>,
    },
  },
};

const BottomTabNavigator = createBottomTabNavigator(tabConfig, {
  activeTintColor: "white",
  barStyle: {
    backgroundColor: Colors.primaryColor,
  },
});

const MainNavigator = createDrawerNavigator({
  SaltMeals: {
    screen: BottomTabNavigator,
    navigationOptions: {
      drawerLabel: "Slane jedla",
    },
  },
  SweetMeals: {
    screen: SweetMealsNavigator,
    navigationOptions: {
      drawerLabel: "Sladke jedla",
    },
  },
  Filters: FiltersNavigator,
  navigationOptions: {
    drawerLabel: "Filtre",
  },
});

//export default createAppContainer(MainNavigator);
