import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LoginScreen } from "./screens/auth/LoginScreen";
import { RegisterScreen } from "./screens/auth/RegisterScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: "#2196F3" }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name="local-post-office" size={24} color="black" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="add-circle" size={24} color="black" />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="profile" size={24} color="black" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
