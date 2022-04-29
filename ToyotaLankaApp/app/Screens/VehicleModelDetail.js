import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Screen from "../Components/Screen";
import VehicleModelGallery from "../Components/VehicleModelGallery";
import VehicleModelImgSlide from "../Components/VehicleModelImgSlide";
import VehicleModelInfo from "../Components/VehicleModelInfo";
import { Vehicle } from "../data/Vehicles";

function VehicleModelDetail({ navigate, route }) {
  const { item } = route.params;
  const [vehicles, setVehicles] = useState([]);

  // setVehiicles(SelectedVehicle);
  useEffect(() => {
    const v = Vehicle.filter((vid) => vid.model === item.model);
    v.map((item) => {
      setVehicles(item);
      console.log("ITEMS", item.model);
    });
    // setVehiicles(v);
    console.log("Selected ", vehicles.secondImage);
  }, []);

  // console.log(item);
  const vehicleColors = [
    {
      id: 1,
      image: require("../assets/ColorsVehicle/Harrier/SensualRedMica.png"),
    },
    {
      id: 2,
      image: require("../assets/ColorsVehicle/Harrier/DarkBlueMica.png"),
    },
    {
      id: 3,
      image: require("../assets/ColorsVehicle/Harrier/PearlWhiteCrystalShine.png"),
    },
    {
      id: 4,
      image: require("../assets/ColorsVehicle/Harrier/PreciousBlackPearl.png"),
    },
    {
      id: 5,
      image: require("../assets/ColorsVehicle/Harrier/SlateGreyMetalic.png"),
    },
  ];
  return (
    <Screen>
      <ScrollView>
        <FlatList
          horizontal
          data={vehicles.secondImage}
          // keyExtractor={(vehicle) => vehicle.id.toString()}
          renderItem={({ item }) => <VehicleModelImgSlide image={item} />}
        />
        <View style={styles.hrLine} />
        <VehicleModelInfo
          model={vehicles.model}
          engine={vehicles.engine}
          wheel={vehicles.wheel}
          gear={vehicles.tranmission}
          fuel={vehicles.fuel}
          seats={vehicles.seats}
          mileage={vehicles.mileage}
          price={vehicles.price}
        />
        <View style={styles.hrLine} />

        <Text style={styles.modelName}>Gallery</Text>
        <VehicleModelGallery />
        <View style={styles.hrLine} />
        <View>
          <TouchableOpacity>
            <Button title="Book Test Drive" color="#58595B" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hrLine: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 30,
    width: 340,
    alignSelf: "center",
  },
  modelName: {
    fontSize: 20,
    fontWeight: "normal",
    alignSelf: "center",
    padding: 10,
  },
});
export default VehicleModelDetail;
