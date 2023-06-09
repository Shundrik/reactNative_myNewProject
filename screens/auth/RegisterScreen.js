import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  Platform,
  Alert,
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../redax/auth/authOperations";

const initialState = {
  email: "",
  password: "",
  name: "",
};

export const RegisterScreen = ({ navigation }) => {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimentsions, setDimentsions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      console.log(width);
      setDimentsions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  const handleTextPress = () => console.log("Baby happy!");
  const handleButtonPress = () => {
    Alert.alert("Choose language", "You can choose languages", [
      { text: "Ukr", onPress: () => console.log("Ukr") },
      { text: "Eng", onPress: () => console.log("Eng") },
    ]);
  };

  const handleButtonTouch = () => {
    prompt("Update username", null, (text) =>
      console.log("Your username is " + text)
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/image/IMG_1898.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text} onPress={handleTextPress}>
            Baby happy!
          </Text>
          <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
                width: dimentsions,
              }}
            >
              <View style={styles.headerForm}>
                {/* <Text style={styles.headerFofmTitle}>Hello again</Text> */}
                <Text style={styles.headerFofmTitle}>Welcome sign up </Text>
              </View>
              <View>
                <Text style={styles.inputTitle}> Name </Text>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  value={state.name}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, name: value }))
                  }
                />
              </View>
              <View>
                <Text style={styles.inputTitle}> Email </Text>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  value={state.email}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>

              <View>
                <Text style={styles.inputTitle}> Password </Text>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  secureTextEntry={true}
                  value={state.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.9}
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={{
              marginTop: 10,
              marginBottom: 20,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("login")}
          >
            <Text>
              {" "}
              please{" "}
              <Text
                style={{
                  fontSize: 20,
                  color: "#ff8c00",
                  textAlign: "center",
                }}
              >
                Sing In
              </Text>
            </Text>
          </TouchableOpacity>

          {/* <Button
            title={"Login"}
            onPress={() => navigation.navigate("login")}
          ></Button> */}

          {/* <Button   title={"Choose language"} onPress={handleButtonPress} color="orange" /> */}
          {/* <Button title={"Reviews"} onPress={handleButtonPress} /> */}

          <StatusBar style="auto" />
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  text: {
    color: "blue",
    fontSize: 30,
    marginTop: 30,
    marginBottom: "auto",
    textAlign: "center",
  },
  image: {
    flex: 1,
    // justifyContent: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    height: 50,
    borderRadius: 10,

    color: "#000",
    marginBottom: 10,
  },
  form: {
    marginBottom: 100,
  },
  inputTitle: {
    color: "#000",
    marginBottom: 5,
    fontSize: 20,
  },
  btn: {
    borderRadius: 10,
    height: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",

    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "transparent",
      },
      android: {
        borderWidth: 0,
        borderColor: "transparent",
        backgroundColor: "#2196F3",
      },
    }),
  },
  btnTitle: {
    color: Platform.OS === "android" ? "#fff" : "#2196F3",
    fontSize: 18,
    marginHorizontal: 20,
  },

  headerForm: {
    alignItems: "center",
    marginBottom: 100,
  },
  headerFofmTitle: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "DeliciousHandrewn",
  },
});
