import React, { useState } from "react";
import { firebase } from "../firebase/config";
import { StyleSheet, View } from "react-native";
import { TextInput, FAB } from "react-native-paper";

export default function AddFood() {
  const [food, setFood] = useState("");
  const [foodPrice, setPrice] = useState("");

  // add food item to Cloud Firestore db in "Cart"
  // .add will give automatic id
  // .set must give id such as .doc(chicken).set({name: gen chk, price: 12.95})
  const onSaveNote = async () => {
    const data = {
      name: food,
      price: foodPrice,
    };
    const db = firebase.firestore();
    const cartRef = db.collection("cart");
    const snapshot = await cartRef.add({
      data,
    });
  };

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
        value={foodPrice}
        placeholder="Add Food Price"
        onChangeText={(foodPrice) => setPrice(foodPrice)}
      />

      <FAB
        label="Add Note"
        style={styles.fab}
        small
        icon="check"
        // disabled={noteTitle == "" ? true : false}
        onPress={() => onSaveNote()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
  },
  fab: {
    color: "white",
  },
});
