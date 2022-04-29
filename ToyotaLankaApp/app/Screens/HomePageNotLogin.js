import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "./Carousel";
import { data } from "../data/data";

const { width, height } = Dimensions.get("window");

export default function HomePageNotLogin({ navigation }) {
  const menu = [
    {
      url: require("../assets/colBE.png"),
      title: "Collision Repaire",
      id: 1,
      dest: "Collision Home",
    },
    {
      url: require("../assets/ser.png"),
      title: "Service Booking",
      id: 2,
      dest: "",
    },
    {
      url: require("../assets/line.png"),
      title: "Vehicle Line-Up",
      id: 3,
      dest: "Vehicle Line Up",
    },
    {
      url: require("../assets/log.png"),
      title: "LogIn/Register",
      id: 4,
      dest: "loginRegister",
    },
  ];
  return (
    <View style={styles.container}>
      <Carousel />
      <View style={styles.menuContainer}>
        {menu.map((item) => (
          <TouchableOpacity
            style={{ marginTop: "7.5%" }}
            key={item.id}
            onPress={() => navigation.navigate(item.dest)}
          >
            <View style={styles.MenucardView}>
              <Image style={styles.menuIcon} source={item.url} />
              <View style={styles.menuTextView}>
                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#E5E5E5",
  },
  menuContainer: {
    color: "#E5E5E5",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 2,
  },
  MenucardView: {
    marginTop: "10%",
  },
  menuIcon: {
    width: width / 2.5,
    height: height / 5,
    flexDirection: "row",
    borderRadius: 10,
  },
  menuTextView: {
    position: "absolute",
    marginLeft: "7%",
    justifyContent: "space-around",
  },
  menuTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    marginTop: 98,
    justifyContent: "space-around",
  },
});
