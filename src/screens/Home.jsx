import React from "react";
import { Zocial } from "@expo/vector-icons";
import HomeImage from "../components/HomeImage";
import HomeButton from "../components/HomeButton";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { Card, Button, Icon, Divider } from "react-native-elements";
import sushi from "../../assets/sushi.jpg";

function MyButton() {
  return (
    <View style={styles.mybuttonView}>
      <TouchableOpacity
        onPress={() => console.log("Facebook")}
        style={styles.mybutton}
      >
        <View style={styles.wrapper}>
          <Zocial name="facebook" size={25} color="#f96332" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log("Twitter")}
        style={styles.mybutton}
      >
        <View style={styles.wrapper}>
          <Zocial name="twitter" size={25} color="#f96332" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log("Instagram")}
        style={styles.mybutton}
      >
        <View style={styles.wrapper}>
          <Zocial name="instagram" size={25} color="#f96332" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function HomePage({ navigation }) {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth.email);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#303030",
      }}
    >
      <ScrollView>
        <HomeImage />
        <MyButton />

        <View style={styles.imgContainer}>
          <Text style={styles.titleTxt}>Chinese/Japanese Cuisine</Text>
          <Text style={styles.txt}>Saki, Beer, Wine, Mixed Drinks</Text>
          <Text style={styles.txt}>Sushi Bar</Text>
          <HomeButton />
        </View>
        <View>
          {/* <Card title="SUSHI" image={require("../../assets/sushi.jpg")}></Card> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  headerImage: {
    width: 90,
    height: 90,
    padding: 2,
  },
  titleTxt: {
    color: "white",
    fontSize: 21,
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    marginBottom: 5,
  },
  txt: {
    color: "white",
    fontSize: 16,
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 10,
  },
  imgContainer: {
    padding: 10,
    borderRadius: 15,
    textAlign: "center",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  iconStyle: {
    right: 3,
    position: "relative",
  },

  mybuttonView: {
    position: "relative",
    bottom: 44,
    zIndex: 1000,
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  wrapper: {
    paddingHorizontal: 30,
    borderColor: "gray",
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: 7,
  },
});
