import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const interior = () => {
  const images = [
    {
      id: 1,
      url: require("../assets/Interior/prado/1.png"),
    },
    {
      id: 2,
      url: require("../assets/Interior/prado/2.png"),
    },
    {
      id: 3,
      url: require("../assets/Interior/prado/3.png"),
    },
    {
      id: 4,
      url: require("../assets/Interior/prado/4.png"),
    },
    {
      id: 5,
      url: require("../assets/Interior/prado/5.png"),
    },
  ];
  return (
    <View>
      <Image
        style={{ width: 352, height: 230 }}
        source={require("../assets/Interior/prado/4.png")}
      />
    </View>
  );
};

const exterior = () => {
  return (
    <View>
      <Image
        style={{ width: 352, height: 230 }}
        source={require("../assets/Exterior/prado/first.png")}
      />
    </View>
  );
};

const renderScene = SceneMap({
  Interior: interior,
  Exterior: exterior,
});

function VehicleModelGallery(props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Interior", title: "Interior" },
    { key: "Exterior", title: "Exterior" },
  ]);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.tabs}>
          <View style={styles.tabContainer}>
            <TabView
              style={styles.tab}
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
              renderTabBar={(props) => (
                <TabBar
                  pressOpacity={0.6}
                  activeColor="red"
                  inactiveColor="#e0e0e0"
                  indicatorStyle={{ backgroundColor: "white" }}
                  style={{ backgroundColor: "#adadad" }}
                  {...props}
                  renderLabel={({ route, color }) => (
                    <Text style={styles.title}>{route.title}</Text>
                  )}
                />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 500,
    width: "100%",
  },
  tabContainer: {
    width: "90%",
    height: "100%",
  },
  tabs: {
    width: "100%",
    height: "55%",
    flexDirection: "row",
    justifyContent: "center",
  },
  loginTab: {
    flex: 1,
    alignItems: "center",
  },
  tab: {
    backgroundColor: "#e0e0e0",
    color: "black",
  },
  tabBar: {
    backgroundColor: "black",
    opacity: 0.5,
  },
  title: {
    color: "white",
    opacity: 1,
    fontSize: 18,
  },
});

export default VehicleModelGallery;
