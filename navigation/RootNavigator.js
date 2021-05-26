import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons"
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import MealsScreen from "../screens/MealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsStack = createStackNavigator();

export const MealsNavigator = () => {
  return (
    <MealsStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.secondaryColor,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MealsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "LRfit", headerTitleStyle: {
          alignSelf: "center"
        } }}
      />
      <MealsStack.Screen
        name="Meals"
        component={MealsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <MealsStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </MealsStack.Navigator>
  );
};

const FavoriteStack = createStackNavigator();

export const FavoriteNavigator = () => {
  return (
    <FavoriteStack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.secondaryColor,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <FavoriteStack.Screen
        name="Meals"
        component={MealsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <FavoriteStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FavoriteStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {

  return (
    <Tabs.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName
        let colorName

        if (route.name === "Recipes") {
          iconName = "food-bank"
          colorName = focused ? Colors.secondaryColor : "gray"
        } else if (route.name === "Favorites") {
          iconName = "favorite"
          colorName = focused ? Colors.secondaryColor : "gray"
        }
        return <MaterialIcons name={iconName} size={34} color={colorName} />
      }
    })
    } tabBarOptions={{
      activeTintColor: Colors.secondaryColor,
      inactiveTintColor: "gray"
    }}>
      <Tabs.Screen
        name="Recipes"
        component={MealsNavigator}
        options={{
          tabBarLabel: "Recepty",
          fontWeight: "bold"
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoriteNavigator}
        options={{
          tabBarLabel: "Obľúbené",
        }}
      />
    </Tabs.Navigator>
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
