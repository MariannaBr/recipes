import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../constants/Colors";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>RÝCHLO, ZDRAVO A CHUTNE</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() =>
            props.navigation.navigate({
              name: "Meals",
              params: { group: "salt", title: "Slané jedlá" },
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>SLANÉ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() =>
            props.navigation.navigate({
              name: "Meals",
              params: { group: "sweet", title: "Sladké jedlá" },
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>SLADKÉ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
    justifyContent: "center",
  },
});

export default HomeScreen;
