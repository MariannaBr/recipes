import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { setFavorite } from "../store/actions/mealsActions";
import { useSelector, useDispatch } from "react-redux";

const MealDetailScreen = ({ route, navigation }) => {
  const [isFavorite, SetIsFavorite] = useState(false);

  const isCurrentFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === route.params.id)
  );

  const dispatch = useDispatch();

  const setFavoriteHandler = () => {
    SetIsFavorite(!isFavorite);
    dispatch(setFavorite(route.params.id));
  };

  useEffect(() => {
    navigation.setParams({ isFav: isCurrentFavorite });
  }, [isCurrentFavorite]);

  let iconName;
  iconName = route.params?.isFav ? "favorite" : "favorite-border";

  return (
    <ScrollView>
      <Image source={route.params?.image} style={styles.image} />
      <View style={styles.screen}>
        <Text style={styles.title}>{route.params?.title}</Text>
      </View>
      <View style={styles.detialsContainer}>
        <Text>{route.params?.duration}</Text>
        <Text>{route.params?.complexity}</Text>
        <TouchableOpacity onPress={setFavoriteHandler}>
          <MaterialIcons
            name={iconName}
            size={30}
            color={Colors.secondaryColor}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subTitle}>Suroviny</Text>
        {route.params?.ingredients.map((ingredient) => (
          <Text style={styles.ingredient} key={ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.subTitle}>Postup</Text>
        {route.params?.steps.map((step, index) => (
          <Text style={styles.ingredient} key={step}>
            {index + 1}. {step}
          </Text>
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
    width: "103%",
    height: 300,
    marginBottom: 10,
    marginHorizontal: -5,
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
    marginBottom: 10,
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
