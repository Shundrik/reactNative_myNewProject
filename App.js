import { useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
// import { AppLoading } from "expo";
// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useRoute} from "./router" ;

const loadAppLication = async () => {
  await Font.loadAsync({
    DeliciousHandrewn: require("./assets/fonts/DeliciousHandrawn-Regular.ttf"),
  });
};

// const AuthStack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

// const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator>
//         <AuthStack.Screen
//           name="login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <AuthStack.Screen
//           name="register"
//           component={RegisterScreen}
//           options={{ headerShown: false }}
//         />
//       </AuthStack.Navigator>
//     );
//   }
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Posts" component={PostsScreen} />
//       <Tab.Screen name="Create" component={CreateScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadAppLication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }a

  return <NavigationContainer>{routing}</NavigationContainer>;
}
