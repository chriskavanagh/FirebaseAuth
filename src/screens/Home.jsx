import React from "react";
import { Zocial } from "@expo/vector-icons";
import HomeImage from "../components/HomeImage";
import HomeButton from "../components/HomeButton";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
//import { useSelector } from "react-redux";
//import { isLoaded } from "react-redux-firebase";
import { Card, Button, Icon, Divider } from "react-native-elements";
//import sushi from "../../assets/sushi.jpg";
import { useSelector } from "react-redux";
import {
  useFirebaseConnect,
  isLoaded,
  isEmpty,
  useFirestoreConnect,
} from "react-redux-firebase";
import firebase from "../firebase/config";

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
  useFirestoreConnect(["menu"]); //hooks into Firestore(menu) from react-redux

  const menu = useSelector((state) => state.firestore.ordered.menu); //react-redux Firebase Firestore
  console.log(menu);
  const auth = useSelector((state) => state.firebase.auth); // react-redux Firebase
  console.log(`I'm from useSelector state.firebase.auth ${auth.email}`);
  const currentUser = firebase.auth().currentUser; // firebase config auth
  const user = JSON.stringify(currentUser);
  console.log(`From firebase.auth().currentUser ${user.email}`);
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
          <Text style={styles.txt}>5207 Bernard Dr</Text>
          <Text style={styles.txt}>Roanoke, VA 24018</Text>
          <Text style={styles.txt}>Saki, Beer, Wine, Mixed Drinks</Text>
          <Text style={styles.txt}>Sushi Bar</Text>
          <HomeButton />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Divider style={{ backgroundColor: "gray", marginVertical: 10 }} />
          <Card containerStyle={{ width: "75%", backgroundColor: "#303030" }}>
            <Card.Title style={{ color: "white" }}>Sushi</Card.Title>
            {/* <Card.Divider /> */}
            <Card.Image source={require("../../assets/sushi.jpg")}></Card.Image>
          </Card>
          <Divider style={{ backgroundColor: "gray", marginVertical: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  titleTxt: {
    color: "#F5F5F5",

    fontSize: 21,
    fontFamily: "nunito-bold",
    //fontWeight: "bold",
    marginBottom: 8,
    marginTop: -8,
  },
  txt: {
    color: "#c4c4c4",

    fontSize: 16,
    fontFamily: "nunito-italic",
    //fontWeight: "bold",
    marginTop: 0,
    marginBottom: 8,
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
