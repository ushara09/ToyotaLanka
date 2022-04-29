import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AppTextInput from "../Components/AppTextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const logIn = () => {
  return (
    <ScrollView>
      <View style={styles.loginTab}>
        <AppTextInput placeholder="UserName" icon={"email"} />
        <AppTextInput
          placeholder="Password"
          secureTextEntry={true}
          icon={"eye"}
        />
        <Pressable style={styles.pressable}>
          <Text style={styles.loginTxt}>Log-In</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ marginTop: "4%", fontWeight: "bold" }}>
          Forgot Password?
        </Text>
      </View>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Text>Reset Your Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const register = () => {
  return <View style={styles.loginTab}></View>;
};

const renderScene = SceneMap({
  Login: logIn,
  register: register,
});
export default function LoginRegister(props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Login", title: "Log-In" },
    { key: "register", title: "Register" },
  ]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.LoginRegisterContainer}>
        <ImageBackground
          source={require("../assets/login-reg.png")}
          style={styles.loginImg}
        >
          <SafeAreaView>
            <View style={styles.logoContainer}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.loginLogo}
              />
            </View>

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
                      activeColor="black"
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
          </SafeAreaView>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  LoginRegisterContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  loginImg: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: "35%",
    width: "100%",
  },
  loginLogo: {
    width: "35%",
    height: "46%",
    marginTop: height / 8,
  },
  tabContainer: {
    width: "80%",
    height: "100%",
    marginTop: "5%",
  },
  tabs: {
    width: "100%",
    height: "55%",
    flexDirection: "row",
    justifyContent: "center",
  },
  loginTab: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
  },
  tab: {
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    color: "black",
  },
  tabBar: {
    backgroundColor: "black",
    opacity: 0.5,
  },
  title: {
    color: "white",
    opacity: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  pressable: {
    backgroundColor: "#EB0A1E",
    width: "35%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    elevation: 7,
    paddingHorizontal: "5.6%",
  },
  loginTxt: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
