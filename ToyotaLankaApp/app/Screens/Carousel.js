import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselItem from "./CarouselItem";

const { width } = Dimensions.get("window");
const height = width * 0.6;

function Carousel(props) {
  const [active, setActive] = useState(0);
  const dataSource = [
    {
      title: "All New Land Cruiser Sahara 2022",
      url: require("../assets/sahara.jpg"),
      description:
        "New Land Cruiser Sahara 2022 comes with more power with 4.2L V8 engine and 7 speed automatic gear box",
      id: 1,
    },
    {
      title: "All New Land Cruiser Sahara 2022",
      url: require("../assets/2022-Toyota-Land-Cruiser-Rear.jpg"),
      description:
        "Intelligent front lamps with 12400px in each side and all LED rear light with sequential hazard lamps",
      id: 2,
    },
    {
      title: "All New Land Cruiser Sahara 2022",
      url: require("../assets/sahara_int.jpg"),
      description:
        "Made with genuine leather and soft touch materials to incerase reliability and experinece the comfort of your ride",
      id: 3,
    },
    {
      title: "All New Toyota Crown 2022",
      url: require("../assets/Toyota-Crown-sedan-11.jpg"),
      description:
        "New Land Crown 2022 comes with more power with different engine sizes and serveral gear box types",
      id: 4,
    },
    {
      title: "All New Toyota Crown 2022",
      url: require("../assets/15th-generation-2018-Toyota-Crown-RS-Interior.jpg"),
      description:
        "Interior is made with geniune hand crafted leather to increase the comfort of your ride",
      id: 5,
    },
  ];

  function change({ nativeEvent }) {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  }

  return (
    <View style={styles.dotView}>
      <ScrollView
        horizontal={true}
        onScroll={change}
        pagingEnabled
        style={{ width, height }}
        showsHorizontalScrollIndicator={false}
      >
        {dataSource.map((item) => (
          <View key={item.id} style={styles.cardView}>
            <Image style={styles.image} source={item.url} />
            <View style={styles.textView}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.imagePlacer}>
        {dataSource.map((i, k) => (
          <Text
            key={k}
            style={k == active ? styles.pagingTextActive : styles.pagingText}
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  pagingText: {
    color: "#888",
    margin: 3,
  },
  pagingTextActive: {
    color: "#fff",
    margin: 3,
  },
  imagePlacer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    backgroundColor: "white",
    margin: "2%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  dotView: {
    width: width,
    height: height,
    marginTop: 50,
  },
  textView: {
    position: "absolute",
    bottom: 0,
    margin: "10%",
    left: "5%",
  },
  image: {
    width: width,
    height: height,
    borderRadius: 10,
    resizeMode: "cover",
  },
  itemTitle: {
    color: "white",
    fontSize: 20,
    shadowColor: "black",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 10,
    shadowColor: "black",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});
export default Carousel;
