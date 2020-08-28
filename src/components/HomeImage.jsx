import React from "react";
import Pic8 from "../../assets/pics/pic8.jpg";
import { View, ImageBackground } from "react-native";
import EStyleSheet, { absoluteFill } from "react-native-extended-stylesheet";

export default () => {
  return (
    <View
      style={{
        height: "50%",
      }}
    >
      <ImageBackground source={Pic8} style={styles.container}>
        <View style={styles.overlay} />
        <View style={styles.top}>
          {/* <Text style={styles.txt}>Szechuans Restaurant</Text> 
          <Text style={styles.sub}>Chinese/Japanese Cuisine</Text>
          <Text style={styles.sub2}>Saki, Beer, Wine, Mixed Drinks</Text>
          <Text style={styles.sub2}>Sushi Bar</Text> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  top: {
    position: "absolute",
    top: 85,
    right: 49,
  },
  txt: {
    fontSize: 20,
    fontFamily: "rocksalt-regular",
    color: "white",
    zIndex: 3000,
    textAlign: "center",
  },
  sub: {
    fontSize: 14,
    fontFamily: "rocksalt-regular",
    color: "white",
    zIndex: 3,
    textAlign: "center",
  },
  sub2: {
    fontSize: 14,
    fontFamily: "rocksalt-regular",
    color: "white",
    zIndex: 3,
    textAlign: "center",
  },
});
