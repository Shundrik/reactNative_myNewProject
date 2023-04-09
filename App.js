import { useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import LoginScreen from "./screens/auth/LoginScreen";

const loadAppLication = async () => {
  await Font.loadAsync({
    DeliciousHandrewn: require("./assets/fonts/DeliciousHandrawn-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAppLication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
   <>
   <LoginScreen/>

   </>  
  );
}
