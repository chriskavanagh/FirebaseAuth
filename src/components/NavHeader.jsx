import React from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.txt}>Szechuans Restaurant</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  conatiner: {
    textAlign: "center",
  },
  txt: {
    fontFamily: "nunito-bold",
    color: "white",
    letterSpacing: 1,
    fontSize: 25,
    textAlign: "center",
  },
});
