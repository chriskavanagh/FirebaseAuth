import React from "react";
import NumInput from "./NumInput";
import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({ item, quantity, renderRightActions }) {
  console.log(`ListItem - ${quantity}`);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.dish}>{item.dish}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
        <NumInput item={item} />
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  subContainer: {
    flex: 1,
  },
  dish: {
    fontSize: 17,
    marginHorizontal: 1,
    fontWeight: "bold",
  },
  price: {
    fontSize: 17,
    marginHorizontal: 1,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 1,
    fontWeight: "bold",
  },
});
