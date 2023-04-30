import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {

    return(
        // <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: 49.59858526729565,
            longitude: 34.65594686512092,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          }}
      >
        <Marker
          coordinate={{
            longitude: 49.59858526729565,
            latitude: 34.65594686512092,
          }}
          title="travel photo"
        />
      </MapView>
    // </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
