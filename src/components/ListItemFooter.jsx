import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
// 42FORYOU
export default function Total() {
  const sub = useSelector((state) => state.cartReducer.total);
  const tax = sub * 0.093;
  const total = sub + tax;
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Subtotal: ${sub.toFixed(2)}</Text>
      <Text style={styles.txt}>Tax: ${tax.toFixed(2)}</Text>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  txt: {
    fontStyle: "italic",
    fontSize: 19,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
