import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { addQuantity, removeQuantity } from "../redux/actions/cartActions";

export default function NumInput({ item, quantity, setQuantity }) {
  //const [quantity, setQuantity] = useState(item.quantity);
  //console.log(`Quantity=${quantity}`);
  const dispatch = useDispatch();

  function increase(quantity) {
    setQuantity(quantity + 1);
    dispatch(addQuantity(item.id));
  }

  function decrease(quantity) {
    setQuantity(quantity >= 2 ? quantity - 1 : quantity);
    dispatch(removeQuantity(item.id));
  }

  return (
    <View style={styles.container}>
      <AntDesign
        name="minuscircleo"
        size={32}
        color="#CD5C5C"
        //onPress={() => setQuantity(quantity >= 2 ? quantity - 1 : quantity)}
        onPress={() => decrease(quantity)}
      />
      <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: "bold" }}>
        {quantity}
      </Text>
      <AntDesign
        name="pluscircleo"
        size={32}
        color="#228B22"
        //onPress={() => setQuantity(quantity + 1)}
        onPress={() => increase(quantity)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
});
