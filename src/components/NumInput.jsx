import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function NumInput(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={{ flex: 1, flexDirection: "row", marginTop: 45 }}>
      <AntDesign
        name="minuscircleo"
        size={52}
        color="black"
        onPress={() => setQuantity(quantity >= 2 ? quantity - 1 : quantity)}
      />
      <Text style={{ marginHorizontal: 14, fontSize: 37, fontWeight: "bold" }}>
        {quantity}
      </Text>
      <AntDesign
        name="pluscircleo"
        size={52}
        color="black"
        onPress={() => setQuantity(quantity + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
