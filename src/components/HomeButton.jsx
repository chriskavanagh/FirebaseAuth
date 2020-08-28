import React from "react";
//import { pics } from "../styles/pic_data";
//import { Text, TouchableOpacity } from "react-native";
//import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
//import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export default (props) => {
  const navigation = useNavigation();
  /* const handlePress = () => {
    //Linking.openURL("https://expo.io");
    WebBrowser.openBrowserAsync("https://expo.io");
  }; */
  return (
    <Button
      onPress={() => navigation.navigate("Food")}
      title="Order Online!"
      type="outline"
      buttonStyle={{
        borderColor: "gray",
        borderWidth: 4,
        width: 380,
        marginTop: 16,
      }}
      titleStyle={{ color: "#f96332" }}
    />
  );
};

/* export default () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Contact")}
      style={styles.button}
    >
      <Text style={{ color: "#f96332" }}>Order Online!</Text>
    </TouchableOpacity>
  );
};
const styles = EStyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#303030",
    padding: 10,
    borderRadius: 5,
    width: "70%",
    marginTop: 19,
    borderWidth: 2,
    borderColor: "#f96332",
    marginBottom: 7,
  },
}); */
