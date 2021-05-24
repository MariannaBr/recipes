import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

const MealItem = (props) => {
  return (
    <View style={StyleSheet.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal} >
        <View>
          <View style={styles.imageContainer}>
            <ImageBackground style={styles.bgImage} source={props.image} >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View>
            <Text>{props.duration}</Text>
            <Text>{props.complexity}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 300,
    width: "100%",
    //backgroundColor: Colors.thirdColor,
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 10,
  },
  imageContainer: {
    flexDirection: "row",
    height: '85%'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    //backgroundColor: Colors.secondaryColor,
    opacity: 0.3,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
});

export default MealItem;
