import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function VehicleModelCard({ image, name, priceTag, onPress, id }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modelContainer}>
        <Image style={styles.vehicleImg} source={image} />
        <View>
          <Text style={styles.vehicleName}>{name}</Text>
          <Text style={styles.vehiclePrice}>Rs. {priceTag} Onwards</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  modelContainer: {
    flexDirection: "row",
    backgroundColor: "#C4C4C480",
    width: 373,
    height: 184,
    borderRadius: 20,
    alignSelf: "center",
    padding: 10,
    marginBottom: 10,
  },
  vehicleImg: {
    width: 280,
    height: 180,
    marginTop: 10,
    marginLeft: -15,
  },
  vehicleName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 5,
    left: -20,
  },
  vehiclePrice: {
    fontSize: 15,
    color: "#D30000",
    left: -20,
  },
});

export default VehicleModelCard;
