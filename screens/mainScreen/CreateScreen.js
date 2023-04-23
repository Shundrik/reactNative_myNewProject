import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  console.log("Create");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log(location.coords);
    setPhoto(photo.uri);
    console.log(photo);
  };

  const sendPhoto = () => {
    navigation.navigate("DefaultScreen", { photo });
  };
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.conteiner}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </View>
        )}

        <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity style={styles.sendContainer} onPress={sendPhoto}>
          <Text style={styles.send}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },

  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  snapContainer: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 50,
    width: 70,
    height: 70,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  snap: {
    color: "#fff",
    justifyContent: "flex-end",
  },
  takePhotoContainer: {
    position: "absolute",
    top: "35%",
    left: "25%",
    overflow: "hidden",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
  },
  sendContainer: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    width: 70,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  send: {
    color: "#000",
  },
});

export default CreateScreen;
