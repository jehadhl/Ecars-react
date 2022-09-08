import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        initialRegion={{
          latitude: 25.186184697310058,
          longitude: 55.380539710904145,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 25.186184697310058,
            longitude: 55.380539710904145,
          }}
          title={"Ecars"}
          description={
            "Dubai,Nadd Al Hamar,Toufiq Complex - warehouse #10 - Dubai"
          }
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
