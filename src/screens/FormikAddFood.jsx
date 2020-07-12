import React from "react";
import { Formik } from "formik";
import { firebase } from "../firebase/config";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function FormikAddFood() {
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
    <View>
      <Formik
        initialValues={{ food: "", price: "" }}
        onSubmit={(values) => {
          onSaveNote(values.food, values.price);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="Item Name"
              value={props.values.food}
              onChangeText={props.handleChange("food")}
            />

            <TextInput
              placeholder="Item Price"
              value={props.values.price}
              onChangeText={props.handleChange("price")}
            />

            <Button
              icon={{
                name: "arrow-right",
                size: 15,
                color: "white",
              }}
              title="Add Your Food!"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default FormikAddFood;
