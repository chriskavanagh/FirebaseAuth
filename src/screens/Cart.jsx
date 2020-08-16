import React from "react";
import { DataTable } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const [quantity, setQuantity] = React.useState(1);
  console.log(quantity);
  //const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);
  return (
    <View style={{ flex: 1 }}>
      {cart.length === 0 && (
        <View>
          <Text>Your Cart Is Empty! Please Buy Something!!</Text>
        </View>
      )}

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Dish</DataTable.Title>
          <DataTable.Title numeric>Quantity</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>
        {cart.length > 0 &&
          cart.map((item) => {
            return (
              <DataTable.Row key={item.id}>
                <DataTable.Cell>{item.dish}</DataTable.Cell>

                <DataTable.Cell numeric>
                  <AntDesign
                    iconStyle={styles.icon}
                    name="minuscircleo"
                    size={20}
                    color="black"
                    onPress={() =>
                      setQuantity(quantity >= 2 ? quantity - 1 : quantity)
                    }
                  />
                  {item.quantity}
                  <AntDesign
                    iconStyle={styles.icon}
                    name="pluscircleo"
                    size={20}
                    color="black"
                    onPress={() => setQuantity(quantity + 1)}
                  />
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  ${item.price.toFixed(2)}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
  },
});
