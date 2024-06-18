import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./screens/Home";
import Maps from "./screens/Maps";
import Settings from "./screens/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView from "react-native-maps";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function TabGroup() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
