import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Colors } from "../constants/Colors";

const MealDetailScreen = ({ route }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image source={route.params?.image} style={styles.image} />
        <Text style={styles.title}>{route.params?.title}</Text>
      </View>
      <View style={styles.detialsContainer}>
        <Text>{route.params?.duration}</Text>
        <Text>{route.params?.complexity}</Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subTitle}>Suroviny</Text>
        {route.params?.ingredients.map((ingredient) => (
          <Text style={styles.ingredient} key={ingredient}>{ingredient}</Text>
        ))}
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subTitle}>Postup</Text>
        {route.params?.steps.map((step, index) => (
          <Text style={styles.ingredient} key={step}>{index+1}. {step}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  image: {
    width: "100%",
    height: 300,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    color: Colors.primaryColor,
    textAlign: "center",
    marginHorizontal: 10,
  },
  detialsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  ingredientsContainer: {
    marginHorizontal: 30,
    marginBottom: 10
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondaryColor,
    paddingVertical: 5,
  },
  ingredient: {
    paddingVertical: 2,
  },
});

export default MealDetailScreen;
