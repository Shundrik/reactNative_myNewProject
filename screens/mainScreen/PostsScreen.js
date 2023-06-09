import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../nestedScreen/DefaultScreenPosts";
import CommentsScreen from "../nestedScreen/CommentsScreen";
import MapScreen from "../nestedScreen/MapScreen";

const NestedScreen = createStackNavigator();

const PostScreen = () => {
 return(
  <NestedScreen.Navigator>
  <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPosts} />
  <NestedScreen.Screen name="Comments" component={CommentsScreen} />
  <NestedScreen.Screen name="Map" component={MapScreen} />
</NestedScreen.Navigator>
 )
};
export default PostScreen;
