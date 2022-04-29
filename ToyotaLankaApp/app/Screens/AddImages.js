import React, { useState, useEffect } from "react";

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
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

function AddImages() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Screen>
      {/* <TopNavbar title="Add Images" /> */}

      <View style={styles.uploadRow1}>
        <TouchableOpacity onPress={pickImage}>
          <MaterialIcons name="add-a-photo" size={74} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage}>
          <MaterialIcons name="add-a-photo" size={74} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.uploadRow2}>
        <TouchableOpacity onPress={pickImage}>
          <MaterialIcons name="add-a-photo" size={74} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage}>
          <MaterialIcons name="add-a-photo" size={74} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.btnSubmit}>Upload</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  uploadRow1: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  uploadRow2: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnSubmit: {
    backgroundColor: "red",
    marginTop: 230,
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

export default AddImages;
