import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Maps({ navigation }) {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.542082,
          longitude: -97.320849,
          latitudeDelta: 20,
          longitudeDelta: 15,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
