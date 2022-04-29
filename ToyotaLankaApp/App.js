import { StatusBar } from "expo-status-bar";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { enableScreens } from "react-native-screens";
enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
const Stack = createSharedElementStackNavigator();
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import HomePageNotLogin from "./app/Screens/HomePageNotLogin";
import LoginRegister from "./app/Screens/LoginRegister";
import VehicleModelDetail from "./app/Screens/VehicleModelDetail";
import VehicleLineUpScreen from "./app/Screens/VehicleLineUpScreen";
import CollisionHome from "./app/Screens/CollisionHome";
import AddReview from "./app/Screens/AddReview";
import RepairSupport from "./app/Screens/RepairSupport";
import AddImages from "./app/Screens/AddImages";
import Reviews from "./app/Screens/Reviews";
import CollisionReviewCard from "./app/Components/CollisionReviewCard";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          options={{ headerShown: false }}
          name="welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{
            title: "Vehicle Line Up",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#EB0A1E" },
          }}
          name="Vehicle Line Up"
          component={VehicleLineUpScreen}
        />
        <Stack.Screen
          options={{
            title: "Toyota Lanka",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#EB0A1E" },
          }}
          name="homePageNotLogin"
          component={HomePageNotLogin}
        />
        <Stack.Screen name="Vehicle Preview" component={VehicleModelDetail} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="loginRegister"
          component={LoginRegister}
        />
        <Stack.Screen
          options={{
            title: "Collision Repair",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#EB0A1E" },
          }}
          name="Collision Home"
          component={CollisionHome}
        />
        <Stack.Screen
          options={{
            title: "Repair Support",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#EB0A1E" },
          }}
          name="Repair Support"
          component={RepairSupport}
        />
        <Stack.Screen
          options={{
            title: "Add Images",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#EB0A1E" },
          }}
          name="Add_Images"
          component={AddImages}
        />
        <Stack.Screen
          options={{
            title: "Reviews",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#EB0A1E" },
          }}
          name="Reviews"
          component={Reviews}
        />
        <Stack.Screen
          options={{
            title: "Add Reviews",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#EB0A1E" },
          }}
          name="AddReviews"
          component={AddReview}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
