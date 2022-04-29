import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/welcomeImage.png")}
        style={styles.image}
      >
        <View style={styles.safeAreaView}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <View style={styles.viewHr} />
          <Text style={styles.companyName}>TOYOTA LANKA</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("homePageNotLogin")}
        >
          <View style={styles.exploreBtn}>
            <Text style={styles.exploreTxt}>EXPLORE</Text>
            <AntDesign name="rightcircleo" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View style={styles.carImgSafe}>
          <Image
            source={require("../assets/pngwing.com.png")}
            style={styles.welcomePageImg}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
  },
  logo: {
    flex: 0.7,
    width: "25%",
    height: "21%",
    marginTop: "1%",
    marginLeft: "7%",
    flexDirection: "row",
  },
  companyName: {
    fontWeight: "bold",
    fontSize: 31,
  },
  safeAreaView: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  viewHr: {
    width: 1,
    backgroundColor: "black",
  },
  welcomePageImg: {
    width: "94%",
    height: "100%",
    marginTop: "45%",
    bottom: 0,
  },
  carImgSafe: {
    flexDirection: "row-reverse",
  },
  explore: {
    fontSize: 20,
    fontWeight: "bold",
  },
  exploreBtn: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: "2%",
    marginLeft: "30%",
    marginRight: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  exploreTxt: {
    paddingRight: "2%",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
