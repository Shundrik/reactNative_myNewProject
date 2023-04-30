import { useState,useEffect } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import {useRoute} from "./router" ;
import {Provider} from "react-redux";
import { store } from "./redax/store";
import db from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(db);




// import { AppLoading } from "expo";
// import "react-native-gesture-handler";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const loadAppLication = async () => {
  await Font.loadAsync({
    DeliciousHandrewn: require("./assets/fonts/DeliciousHandrawn-Regular.ttf"),
  });
};


export default function App() {
  const [user, setUser] = useState(null)
  const routing = useRoute(user);



   auth.onAuthStateChanged(user=>setUser(user));

  console.log(user);


  // const [isReady, setIsReady] = useState(false);
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadAppLication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <Provider store={store} >
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  )
}


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