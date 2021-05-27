import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from '@react-navigation/native'
import MealItem from "./MealItem";
import { useSelector } from "react-redux"

const MealList = props => {

  const navigation = useNavigation()
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals) 

  const renderMealItem = ({ item }) => {

    const isFavorite = favoriteMeals.some(meal => meal.id === item.id)

    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        onSelectMeal={() => 
          navigation.navigate({
            name: "MealDetail",
            params: {
              id: item.id,
              title: item.title,
              image: item.imageUrl,
              duration: item.duration,
              complexity: item.complexity,
              ingredients: item.ingredients,
              steps: item.steps,
              isFav: isFavorite
            }
          })
        }
      />
    );
  };


  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15
  },
});

export default MealList;
