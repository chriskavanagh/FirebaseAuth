import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
//import NumericInput from "react-native-numeric-input";
//import { TouchableHighlight } from "react-native-gesture-handler";
//import {addQuantity} from "../redux/actions/cartActions";
import NumInput from "./NumInput";

export default function ListItem({ item, quantity }) {
  //const [quantity, setQuantity] = React.useState(1);
  //const dispatch = useDispatch();

  /* React.useEffect(() => {
    dispatch(addQuantity(item.id));
  },[quantity]) */

  console.log(`ListItem - ${quantity}`);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.dish}>{item.dish}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <NumInput item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  subContainer: {
    flex: 1,
  },
  dish: {
    fontSize: 17,
    marginHorizontal: 1,
    fontWeight: "bold",
  },
  price: {
    fontSize: 17,
    marginHorizontal: 1,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 1,
    fontWeight: "bold",
  },
});
