import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { Colors } from "../constants/Colors";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal} >
        <View>
          <View style={styles.imageContainer}>
            <ImageBackground style={styles.bgImage} source={props.image} >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.propsContainer}>
            <Text style={styles.props}>{props.duration}</Text>
            <Text style={styles.props}>{props.complexity}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 250,
    width: "95%",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    height: '90%',
  },
  bgImage: {
    width: '103%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: Colors.secondaryColor,
    opacity: 0.6,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  propsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "10%",
    paddingVertical: 3,
    backgroundColor: Colors.primaryColor
  },
  props: {
    fontSize: 15,
    color: "black"
  }
});

export default MealItem;
