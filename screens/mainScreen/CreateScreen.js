// import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Camera } from "expo-camera";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateScreen = () => {
  const [snap, setSnap] = useState(null);

  // useEffect

  return (
    <View style={styles.conteiner}>
      <Camera style={styles.camera}>
        <TouchableOpacity
          style={styles.snapContainer}
          // onPress={console.log(snap)}
        >
          <Text  style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
   },

  camera: {
    flex:1,
    // height: 300,
    justifyContent:"flex-end",
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
    justifyContent:"flex-end",
    
  },
});

export default CreateScreen;
