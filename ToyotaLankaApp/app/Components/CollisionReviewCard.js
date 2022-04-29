import React from "react";

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

function CollisionReviewCard({ comment, img }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.reviewTxt}>{comment}</Text>
        <Image style={styles.exImg} source={img} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  exImg: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  reviewTxt: {
    alignSelf: "center",
    marginLeft: 40,
    marginRight: 40,
    fontSize: 20,
  },
  container: {
    backgroundColor: "#d3d3d3",
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
  },
});

export default CollisionReviewCard;
