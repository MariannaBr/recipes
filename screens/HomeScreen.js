import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      {/* <ImageBackground
        source={require("../assets/background.png")}
        style={styles.image}
        resizeMode='cover'
      > */}
        {/* <View style={styles.container}> */}
          <Text style={styles.title}>Rychlo, zdravo a chutne</Text>
        {/* </View> */}
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
    justifyContent: "center",
  },
});

export default HomeScreen;
