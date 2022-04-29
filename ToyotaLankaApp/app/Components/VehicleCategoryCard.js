import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function VehicleCategoryCard({ image, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.categoryBox1}>
        <Image style={styles.categoryImage} source={image} />
        <Text style={styles.categoryText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryBox1: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "red",
    width: 100,
    height: 100,
    alignItems: "center",
    marginLeft: 5,
  },
  categoryImage: {
    width: 85,
    height: 35,
    top: 20,
  },
  categoryText: {
    color: "#424242",
    fontSize: 18,
    top: 25,
  },
});

export default VehicleCategoryCard;
