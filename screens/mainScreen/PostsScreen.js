import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.conteiner} >
      <Text >PostsScreen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    conteiner: {
          flex: 1,
          justifyContent:"center",
          alignItems:"center",
    },
})
    
    
    
export default PostsScreen;
  