import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Maps({ navigation }) {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          initialZoom: 500,
          latitude: 32.542082,
          longitude: -97.320849,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
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
