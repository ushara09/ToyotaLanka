import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

import Screen from "../Components/Screen";
import TopNavbar from "../Components/TopNavbar";
import VehicleCategoryCard from "../Components/VehicleCategoryCard";
import VehicleModelCard from "../Components/VehicleModelCard";
import { Vehicle } from "../data/Vehicles";

function VehicleLineUpScreen({ navigation }) {
  const models = [
    {
      id: "1",
      name: "RAV4",
      price: "4M",
      image: require("../assets/vehicleLineUpImages/rav4.png"),
    },
    {
      id: "2",
      name: "C-HR",
      price: "2M",
      image: require("../assets/vehicleLineUpImages/chr.png"),
    },
    {
      id: "3",
      name: "Harier",
      price: "8M",
      image: require("../assets/vehicleLineUpImages/harrier.png"),
    },
    {
      id: "4",
      name: "LandCruiser Prado",
      price: "12M",
      image: require("../assets/vehicleLineUpImages/landcruise-prado.png"),
    },
  ];

  const types = [
    {
      id: "1",
      title: "Sedan",
      image: require("../assets/vehicleLineUpImages/sedan.png"),
    },
    {
      id: "2",
      title: "Wagon",
      image: require("../assets/vehicleLineUpImages/wagon.png"),
    },
    {
      id: "3",
      title: "SUV",
      image: require("../assets/vehicleLineUpImages/suv.png"),
    },
    {
      id: "4",
      title: "Sport",
      image: require("../assets/vehicleLineUpImages/sport.png"),
    },
    {
      id: "5",
      title: "Light Car",
      image: require("../assets/vehicleLineUpImages/lightCar.png"),
    },
    {
      id: "6",
      title: "MiniVan",
      image: require("../assets/vehicleLineUpImages/minivan.png"),
    },
  ];
  return (
    <Screen>
      <View style={styles.categoryContainer}>
        <FlatList
          horizontal={true}
          data={types}
          keyExtractor={(type) => type.id.toString()}
          renderItem={({ item }) => (
            <VehicleCategoryCard
              title={item.title}
              image={item.image}
              onPress={() => console.log(item.id)}
            />
          )}
        />
      </View>
      <View style={styles.hrLine} />

      <View style={styles.modelLayout}>
        <FlatList
          data={Vehicle}
          keyExtractor={(model) => model.id.toString()}
          renderItem={({ item }) => (
            <VehicleModelCard
              image={item.mainImage}
              name={item.model}
              priceTag={item.price}
              id={item.id}
              onPress={() => {
                navigation.navigate("Vehicle Preview", { item });
              }}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  categoryContainer2: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 130,
  },
  hrLine: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 30,
    width: 340,
    alignSelf: "center",
  },
  modelLayout: {
    marginTop: 20,
    height: "70%",
  },
  scrollView: {
    marginHorizontal: 5,
  },
});

export default VehicleLineUpScreen;
