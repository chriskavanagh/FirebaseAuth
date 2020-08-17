import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
//import { TouchableHighlight } from "react-native-gesture-handler";
import MultiValue from "react-select/src/components/MultiValue";
//import {addQuantity} from "../redux/actions/cartActions";

export default function ListItem({ item, onPress }) {
  const [quantity, setQuantity] = React.useState(1);
  //const dispatch = useDispatch();

  /* function monChange(value) {
    console.log(quantity);
  } */

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
      <NumericInput
        type="plus-minus"
        //onPress={monChange}
        minValue={1}
        maxValue={10}
        value={item.quantity}
        onChange={(value) => setQuantity(value)}
        totalWidth={120}
        totalHeight={40}
        iconSize={16}
        rightButtonBackgroundColor="#9ACD32"
        leftButtonBackgroundColor="#FF6347"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF5EE",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  subContainer: {
    flex: 1,
  },
  dish: {
    fontSize: 18,
    marginHorizontal: 1,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    marginHorizontal: 1,
  },
  quantity: {
    fontSize: 15,
    marginHorizontal: 1,
    fontWeight: "bold",
  },
});
