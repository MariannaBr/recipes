import React from "react";
import { Colors } from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealsScreen from "../screens/MealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsStack = createStackNavigator();

export const MealsNavigator = (props) => {
  return (
    <MealsStack.Navigator initialRouteName="Home">
      <MealsStack.Screen name="Home" component={HomeScreen} />
      <MealsStack.Screen name="Meals" component={MealsScreen} options={{title: props.title}} />
      <MealsStack.Screen name="MealDetail" component={MealDetailScreen} />
    </MealsStack.Navigator>
  );
};

const FiltersStack = createStackNavigator();

export const FiltersNavigator = () => {
  return (
    <FiltersStack.Navigator initialRouteName="Home">
      {/* <FiltersStack.Screen name="Home" component={HomeScreen} /> */}
      <FiltersStack.Screen name="Filters" component={FiltersScreen} />
      <FiltersStack.Screen name="Meals" component={MealsScreen} options={{title: "Vybrate jedla"}} />
      <FiltersStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FiltersStack.Navigator>
  );
};

// const MealsDrawer = createDrawerNavigator();

// export const MealNavigator = () => {
//   return (
//     <MealsDrawer.Navigator>
//       <MealsDrawer.Screen name="SaltMeals" component={SaltMealsNavigator} />
//       <MealsDrawer.Screen name="SweetMeals" component={SweetMealsNavigator} />
//       <MealsDrawer.Screen name="MealsFilters" component={FiltersNavigator} />
//     </MealsDrawer.Navigator>
//   );
// };

const Tabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Recipes"
        component={MealsNavigator}
        options={{
          tabBarColor: Colors.secondaryColor,
          tabBarLabel: "Recepty",
        }}
      />
      <Tabs.Screen
        name="MealsFilters"
        component={FiltersNavigator}
        options={{
          tabBarColor: Colors.secondaryColor,
          tabBarLabel: "Filtre",
        }}
      />
    </Tabs.Navigator>
  );
};

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
