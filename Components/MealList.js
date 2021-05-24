import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetail");
        }}
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
    padding: 15,
  },
});

export default MealList;
