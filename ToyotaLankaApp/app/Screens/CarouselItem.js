import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function CarouselItem({ image, title, description }) {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={image} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    margin: "2%",
    marginLeft: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: "absolute",
    bottom: "10%",
    margin: "10%",
    left: "5%",
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 20,
    shadowColor: "black",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 10,
    shadowColor: "black",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});
