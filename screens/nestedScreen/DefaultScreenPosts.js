import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, FlatList, Image } from "react-native";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  // console.log(route);
  useEffect(() => {
    console.log(route.params);
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);

  return (
    <View style={styles.conteiner}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapperPeosts}>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            ></Image>
          </View>
        )}
      />
      <Button title="go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="go to comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperPeosts: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DefaultScreenPosts;
