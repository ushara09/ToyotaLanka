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
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

function AddReview({ navigation }) {
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState(" ");

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

  const pressBtn = () => {
    // alert("Review Added");
    // navigation.navigate("Reviews");
    if (comment == " ") {
      alert("Enter a review !");
    } else {
      alert("Review Added Sucessfully !");
      navigation.navigate("Reviews");
    }
  };

  return (
    <Screen>
      {/* <TopNavbar title="Add Review" /> */}
      <Image
        style={styles.exImg}
        source={require("../assets/CollisionRepair/shareExperience.jpg")}
      />

      <TouchableOpacity onPress={pickImage}>
        <View>
          <Text style={styles.addImgText}>Add a image of repaired vehicle</Text>

          <MaterialIcons
            style={styles.addImgIcon}
            name="add-a-photo"
            size={44}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <View>
        <TextInput
          style={styles.inputBox}
          onChangeText={(val) => setComment(val)}
          placeholder="Enter the review"
        />
      </View>
      <TouchableOpacity onPress={pressBtn}>
        <View>
          <Text style={styles.submitTxt}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  exImg: {
    width: 400,
    height: 200,
  },
  addImgText: {
    fontSize: 20,
    marginTop: 25,
    marginLeft: 10,
  },
  addImgIcon: {
    marginLeft: 310,
    marginTop: -35,
  },
  inputBox: {
    //backgroundColor: "grey",
    marginTop: 10,
    height: 250,
    backgroundColor: "#d3d3d3",
    fontSize: 20,
    paddingBottom: 230,
  },
  submitTxt: {
    marginTop: 15,
    backgroundColor: "red",
    alignSelf: "center",
    width: 250,
    height: 50,
    borderRadius: 50,
    paddingLeft: 100,
    paddingTop: 15,
    fontSize: 15,
    color: "white",
  },
});

export default AddReview;
