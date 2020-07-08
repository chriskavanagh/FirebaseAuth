import React, { useState } from "react";
import { firebase } from "../firebase/config";
import { StyleSheet, View } from "react-native";
import { TextInput, FAB } from "react-native-paper";

export default function AddFood() {
  const [food, setFood] = useState("");
  const [foodPrice, setPrice] = useState("");
  const [error, setError] = useState(null);

  // add food item to Cloud Firestore db in "Cart"
  // .add will give automatic id
  // .set must give id such as .doc(chicken).set({name: gen chk, price: 12.95})
  const onSaveNote = async () => {
    const data = {
      name: food,
      price: foodPrice,
    };
    try {
      const db = firebase.firestore();
      const cartRef = db.collection("cart");
      const snapshot = await cartRef.add({
        data,
      });
      setFood("");
      setPrice("");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Food"
        value={food}
        placeholder="Add Food Item"
        onChangeText={(food) => setFood(food)}
        theme={{ colors: { text: "#0c0c0c" } }}
      />
      <TextInput
        label="Price"
        keyboardType="numeric"
        value={foodPrice}
        placeholder="Add Food Price"
        onChangeText={(foodPrice) => setPrice(foodPrice)}
        theme={{ colors: { text: "#0c0c0c" } }}
      />

      <FAB
        label="Add Note"
        style={styles.fab}
        small
        icon="check"
        disabled={food == "" || foodPrice == "" ? true : false}
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
    marginTop: 10,
  },
  text: {
    color: "red",
  },
});
