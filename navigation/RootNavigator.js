import React from "react";
import { Colors } from "../constants/Colors";
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealsScreen from "../screens/MealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const SaltMealsStack = createStackNavigator();

export const SaltMealsNavigator = () => {
  return (
    <SaltMealsStack.Navigator initialRouteName="Home">
      <SaltMealsStack.Screen name="Home" component={HomeScreen} />
      <SaltMealsStack.Screen name="Meals" component={MealsScreen} />
      <SaltMealsStack.Screen name="MealDetail" component={MealDetailScreen} />
    </SaltMealsStack.Navigator>
  );
};

const SweetMealsStack = createStackNavigator();

export const SweetMealsNavigator = () => {
  return (
    <SweetMealsStack.Navigator initialRouteName="Home">
      <SweetMealsStack.Screen name="Home" component={HomeScreen} />
      <SweetMealsStack.Screen name="Meals" component={MealsScreen} />
      <SweetMealsStack.Screen name="MealDetail" component={MealDetailScreen} />
    </SweetMealsStack.Navigator>
  );
};

const FiltersStack = createStackNavigator();

export const FiltersNavigator = () => {
  return (
    <FiltersStack.Navigator initialRouteName="Home">
      <FiltersStack.Screen name="Home" component={HomeScreen} />
      <FiltersStack.Screen name="Filters" component={FiltersScreen} />
    </FiltersStack.Navigator>
  );
};

const MealsDrawer = createDrawerNavigator();

export const MealNavigator = () => {
  return (
    <MealsDrawer.Navigator>
      <MealsDrawer.Screen name="SaltMeals" component={SaltMealsNavigator} />
      <MealsDrawer.Screen name="SweetMeals" component={SweetMealsNavigator} />
      <MealsDrawer.Screen name="Filters" component={FiltersNavigator} />
    </MealsDrawer.Navigator>
  )
}

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

const Tabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="SaltMeals" component={SaltMealsNavigator} />
      <Tabs.Screen name="SweetMeals" component={SweetMealsNavigator} />
      <Tabs.Screen name="Filters" component={FiltersNavigator} />
    </Tabs.Navigator>
  )
  }

// const MainNavigator = createDrawerNavigator({
//   SaltMeals: {
//     screen: BottomTabNavigator,
//     navigationOptions: {
//       drawerLabel: "Slane jedla",
//     },
//   },
//   SweetMeals: {
//     screen: SweetMealsNavigator,
//     navigationOptions: {
//       drawerLabel: "Sladke jedla",
//     },
//   },
//   Filters: FiltersNavigator,
//   navigationOptions: {
//     drawerLabel: "Filtre",
//   },
// });
