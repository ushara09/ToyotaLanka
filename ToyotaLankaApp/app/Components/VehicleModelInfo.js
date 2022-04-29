import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function VehicleModelInfo({
  engine,
  gear,
  wheel,
  mileage,
  fuel,
  seats,
  model,
  price,
}) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.modelName}>{model}</Text>
      </View>
      <View style={styles.info}>
        <Image source={require("../assets/VehicleDashboargIcons/engine.png")} />
        <Text>{engine}</Text>
        <View style={styles.vtLine} />
        <Image source={require("../assets/VehicleDashboargIcons/gear.png")} />
        <Text>{gear}</Text>
        <View style={styles.vtLine} />
        <Image source={require("../assets/VehicleDashboargIcons/4wd.png")} />
        <Text>{wheel}</Text>
      </View>
      <View style={styles.info}>
        <Image
          source={require("../assets/VehicleDashboargIcons/mileage.png")}
        />
        <Text>{mileage} km/L</Text>
        <View style={styles.vtLine} />
        <Image source={require("../assets/VehicleDashboargIcons/fuel.png")} />
        <Text>{fuel} </Text>
        <View style={styles.vtLine} />
        <Image source={require("../assets/VehicleDashboargIcons/seats.png")} />
        <Text>{seats} People</Text>
      </View>
      <View style={styles.priceTag}>
        <Text style={styles.priceText}>Rs. {price} (Tax Included)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 200,
    width: 380,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    top: 10,
  },
  modelName: {
    fontSize: 20,
    fontWeight: "normal",
    top: -80,
  },
  info: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
    marginTop: -90,
    marginBottom: 10,
  },
  vtLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  priceTag: {
    height: 35,
    width: 300,
    backgroundColor: "#EB0A1E50",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 60,
  },
  priceText: {
    fontWeight: "normal",
    fontSize: 15,
  },
});

export default VehicleModelInfo;
