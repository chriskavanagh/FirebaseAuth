import React from "react";
import { Formik } from "formik";
import firebase from "../firebase/config";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddFood() {
  const onSaveNote = async (food, price) => {
    const data = {
      name: food,
      price: price,
    };
    try {
      const db = firebase.firestore();
      const cartRef = db.collection("cart");
      const snapshot = await cartRef.add({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ food: "", price: "" }}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.resetForm();
          onSaveNote(values.food, values.price);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Item Name"
              value={props.values.food}
              onChangeText={props.handleChange("food")}
            />

            <TextInput
              style={styles.input}
              placeholder="Item Price"
              value={props.values.price}
              onChangeText={props.handleChange("price")}
            />

            <Button
              style={styles.btn}
              icon={
                <Icon
                  name="arrow-right"
                  size={18}
                  color="white"
                  style={{ marginRight: 5 }}
                />
              }
              title="Add Food"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  btn: {
    marginTop: 9,
  },
});

/* const onSaveNote = async (food, price) => {
  const data = {
    name: food,
    price: price,
  };
  try {
    const db = firebase.firestore();
    const cartRef = db.collection("cart");
    const snapshot = await cartRef.add({
      data,
    });
  } catch (error) {
    console.log(error);
  }
}; */
