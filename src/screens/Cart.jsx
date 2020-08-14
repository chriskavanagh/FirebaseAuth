import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

export default function Cart() {
  //const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Cart</Text>

      {cart.length === 0 && (
        <View>
          <Text>Your Cart Is Empty! Please Buy Something!!</Text>
        </View>
      )}

      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <View key={item.id}>
              <Text style={{ color: "red" }}>
                {item.dish} - ${item.price.toFixed(2)} - Quantity:{" "}
                {item.quantity}
              </Text>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
  },
});
