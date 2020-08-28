import React from "react";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
    // keeps dispatch from being called if quantity is 1 or less
    // otherwise will get negative values on sub/total/tax
    quantity >= 2 ? dispatch(removeQuantity(item.id)) : console.log("done");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign
          name="minuscircleo"
          size={32}
          color="#343a40"
          //onPress={() => setQuantity(quantity >= 2 ? quantity - 1 : quantity)}
          onPress={() => decrease(quantity)}
        />
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: "bold" }}>
        {quantity}
      </Text>
      <TouchableOpacity>
        <AntDesign
          name="pluscircleo"
          size={32}
          color="#343a40"
          //onPress={() => setQuantity(quantity + 1)}
          onPress={() => increase(quantity)}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
});
