import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import VehicleColorButtonGroup from "./VehicleColorButtonGroup";

function VehicleModelImgSlide({ image }) {
  return (
    <View style={styles.colorsImg}>
      <Image style={styles.centerImage} source={image} />
      <View style={styles.buttonGroup}>
        <VehicleColorButtonGroup color="blue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorsImg: {
    backgroundColor: "#fff",
    width: "95%",
    height: 200,
    alignSelf: "center",
  },
  centerImage: {
    width: 200,
    height: 150,
    alignSelf: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
  colorBtns1: {
    width: 30,
    height: 30,
    backgroundColor: "#f7f6f2",
    borderRadius: 40,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    marginLeft: 5,
  },
  colorBtns2: {
    width: 30,
    height: 30,
    backgroundColor: "#123d5a",
    borderRadius: 40,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    marginLeft: 5,
  },
});

export default VehicleModelImgSlide;
