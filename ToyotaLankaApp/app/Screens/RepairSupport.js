import React, { useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Button,
  TextInput,
} from "react-native";

import Screen from "../Components/Screen";
import TopNavbar from "../Components/TopNavbar";
import * as openanything from "react-native-openanything";
import { TouchableOpacity } from "react-native-gesture-handler";

function RepairSupport({ navigation }) {
  const [Vnumber, setVnumber] = useState(" ");
  const [Mnumber, setMnumber] = useState(" ");

  const btnsubmit = () => {
    if (Vnumber == " ") {
      alert("Enter the vehicle number !");
    } else if (Mnumber == " ") {
      alert("Enter mobile number !");
    } else if (Mnumber.length != 10) {
      alert("Enter valid mobile number");
    } else {
      alert("Submited Successfully !");
      navigation.navigate("Collision Home");
    }
  };

  return (
    <Screen>
      {/* <TopNavbar title="Repair Support" /> */}
      <Image
        style={styles.repairImg}
        source={require("../assets/CollisionRepair/repair.jpg")}
      />

      <TouchableOpacity onPress={() => openanything.Call("0112667939")}>
        <View>
          <Text style={styles.callText}>Call Us Now - 0112 667 939</Text>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.inputLable}>Enter Vehicle Numbers</Text>
        <TextInput
          onChangeText={(val) => setVnumber(val)}
          style={styles.inputTxt}
          placeholder="CAA-1234, KA-1234"
        />
      </View>
      <View style={{ marginTop: 25 }}>
        <Text style={styles.inputLable}>Enter Mobile Numbers</Text>
        <TextInput
          onChangeText={(val) => setMnumber(val)}
          style={styles.inputTxt}
          placeholder="071*******"
        />
      </View>
      <View style={styles.uplocView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Add_Images");
          }}
        >
          <Text style={styles.uplocTxt}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openanything.Map()}>
          <Text style={styles.uplocTxt}>Location</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={btnsubmit}>
        <Text style={styles.btnSubmit}>Submit</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  repairImg: {
    marginTop: 10,
    height: 100,
    width: "100%",
  },
  callText: {
    fontSize: 20,
    backgroundColor: "#adff2f",
    marginTop: 15,

    alignSelf: "center",
    width: 300,
    height: 50,
    borderRadius: 10,
    paddingLeft: 30,
    paddingTop: 10,
  },
  inputLable: {
    fontSize: 20,
  },
  inputTxt: {
    backgroundColor: "#d3d3d3",
    height: 75,
    paddingBottom: 40,
  },
  uplocView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  uplocTxt: {
    backgroundColor: "red",
    marginTop: 10,
    paddingLeft: 40,
    paddingTop: 10,
    borderRadius: 50,
    width: 150,
    height: 50,
    fontSize: 20,
    color: "white",
  },
  btnSubmit: {
    backgroundColor: "red",
    marginTop: 20,
    paddingLeft: 90,
    paddingTop: 10,
    borderRadius: 50,
    width: 250,
    height: 50,
    fontSize: 20,
    alignSelf: "center",
    color: "white",
  },
});

export default RepairSupport;
