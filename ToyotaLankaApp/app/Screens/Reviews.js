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
import CollisionReviewCard from "../Components/CollisionReviewCard";
import { TouchableOpacity } from "react-native-gesture-handler";

function Reviews({ navigation }) {
  //   const reviews = [
  //     {
  //       key: "1",
  //       comment: "comment1",
  //     },
  //   ];

  const reviews = [
    {
      id: "1",
      name: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
      image: require("../assets/CollisionRepair/car1.jpg"),
    },
    {
      id: "2",
      name: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
      image: require("../assets/CollisionRepair/car2.jpg"),
    },
    {
      id: "3",
      name: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
      image: require("../assets/CollisionRepair/car3.jpg"),
    },
    // {
    //   id: "4",
    //   name: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    //   image: require("../assets/CollisionRepair/car4.jpg"),
    // },
  ];

  return (
    <Screen>
      {/* <TopNavbar title="Reviews" /> */}

      <ScrollView style={{ height: 550, marginTop: -40 }}>
        <FlatList
          horizontal={false}
          data={reviews}
          keyExtractor={(type) => type.id.toString()}
          renderItem={({ item }) => (
            <CollisionReviewCard comment={item.name} img={item.image} />
          )}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddReviews");
        }}
      >
        <View style={{ marginTop: -40 }}>
          <Text style={styles.addReviewBtn}>Add Review</Text>
        </View>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  addReviewBtn: {
    backgroundColor: "red",
    marginTop: 50,
    paddingLeft: 70,
    paddingTop: 10,
    borderRadius: 50,
    width: 250,
    height: 50,
    fontSize: 20,
    alignSelf: "center",
    color: "white",
  },
});

export default Reviews;
