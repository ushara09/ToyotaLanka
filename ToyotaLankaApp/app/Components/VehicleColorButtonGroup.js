import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

function VehicleColorButtonGroup({ color }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 40,
          borderColor: "#c4c4c4",
          borderWidth: 1,
          marginLeft: 5,
          backgroundColor: { color },
        }}
      ></View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  colorBtns1: {
    width: 30,
    height: 30,
    borderRadius: 40,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    marginLeft: 5,
  },
});

export default VehicleColorButtonGroup;
