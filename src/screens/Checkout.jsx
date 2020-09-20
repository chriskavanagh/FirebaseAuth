import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";

export default function Checkout({ route }) {
  const [num, setNum] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  //const { items } = route.params;
  const _onChange = (form) => {
    setNum(form.values.number),
      setExpiry(form.values.expiry),
      setCvc(form.values.cvc);
  };

  return (
    <View style={styles.container}>
      <CreditCardInput onChange={_onChange} />
      {console.log(num)}
      {console.log(expiry)}
      {/*  {items.map((item) => {
        return (
          <View key={item.id}>
            <Text style={{ fontSize: 17 }}>{item.dish}</Text>
            <Text style={{ fontSize: 15 }}>{item.quantity}</Text>
            <Text style={{ fontSize: 15 }}>{item.notes}</Text>
          </View>
        );
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 1,
  },
});
