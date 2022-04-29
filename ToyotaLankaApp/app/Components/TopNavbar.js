import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function TopNavbar({ title }) {
  return (
    <View style={styles.navBarTop}>
      <AntDesign
        style={styles.navBarArrow}
        name="arrowleft"
        size={25}
        color="#fff"
      />
      <Text style={styles.navBarText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarTop: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 50,
  },
  navBarText: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    marginLeft: 30,
  },
  navBarArrow: {
    alignSelf: "center",
    marginLeft: 20,
  },
});

export default TopNavbar;
