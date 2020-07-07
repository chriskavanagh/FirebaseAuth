import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function AddFood() {
  const [food, setFood] = useState("");
  const [price, setPrice] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        label="Add Food"
        value={food}
        placeholder="Add Food Item"
        onChangeText={(food) => setFood(food)}
      />
      <TextInput
        label="Price"
        value={price}
        placeholder="Add Food Price"
        onChangeText={(price) => setPrice(price)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
  },
});
