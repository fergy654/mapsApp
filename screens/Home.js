import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Hello Mother Fuckers </Text>
    </View>
  );
}
