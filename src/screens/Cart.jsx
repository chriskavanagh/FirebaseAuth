import React from "react";
//import { AntDesign } from "@expo/vector-icons";
import ListItem from "../components/ListItem";
import { Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, FlatList } from "react-native";
import ListItemSeperator from "../components/ListItemSeperator";

export default function Cart() {
  //const [quantity, setQuantity] = React.useState(1);
  //console.log(quantity);
  //const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem item={item} quantity={item.quantity} />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
      <View style={styles.btn}>
        <Button
          title="Checkout"
          type="outline"
          onPress={() => console.log("test")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
  },
  btn: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
