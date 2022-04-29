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
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function CollisionHome({ navigation }) {
  return (
    <Screen>
      {/* <TopNavbar title="Collision Repair" /> */}
      <View>
        <Image
          style={styles.homeimg}
          source={require("../assets/CollisionRepair/collisionHome.png")}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Repair Support");
          }}
        >
          <View style={styles.repairBtn}>
            <MaterialIcons
              // style={styles.homeIcon}
              style={{ marginTop: -10, marginLeft: 40 }}
              name="car-repair"
              size={54}
              color="white"
            />
            <Text style={styles.repairText}>Repair Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Reviews");
          }}
        >
          <View style={styles.reviewBtn}>
            <MaterialIcons
              style={styles.homeIcon}
              name="feedback"
              size={44}
              color="white"
            />
            <Text style={styles.reviewText}>Reviews</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  homeimg: {
    marginTop: -10,
    width: 400,
    height: 200,
  },

  homeIcon: {
    marginLeft: 50,
  },

  repairBtn: {
    marginTop: 80,
    backgroundColor: "red",
    height: 60,

    paddingTop: 15,
    borderRadius: 50,

    //fontSize: 20,
  },
  repairText: {
    marginTop: -55,
    fontSize: 25,
    //backgroundColor: "green",
    alignSelf: "center",
    color: "white",
  },
  reviewText: {
    marginTop: -45,
    fontSize: 25,
    //backgroundColor: "green",
    alignSelf: "center",
    // marginBottom: "50px",
    color: "white",
  },

  reviewBtn: {
    marginTop: 50,
    backgroundColor: "red",
    height: 60,
    paddingTop: 15,
    borderRadius: 50,
  },
});

export default CollisionHome;
