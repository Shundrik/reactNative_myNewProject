import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>CommentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentsScreen;
