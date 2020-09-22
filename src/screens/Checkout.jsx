import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
//import StripeCheckout from "expo-stripe-checkout";

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
      {/* {items.map((item) => {
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

/* export default function Checkout({ route }) {
  const onPaymentSuccess = (token) => {
    // send the stripe token to your backend!
    console.log("Chrckout");
  };

  const onClose = () => {
    // maybe navigate to other screen here?
    console.log("Close Checkout");
  };
  return (
    <StripeCheckout
      publicKey="sk_test_4eC39HqLyjWDarjtT1zdp7dc"
      amount={100000}
      imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
      storeName="Stripe Checkout"
      description="Test"
      currency="USD"
      allowRememberMe={false}
      prepopulatedEmail="test@test.com"
      onClose={this.onClose}
      onPaymentSuccess={this.onPaymentSuccess}
    />
  );
} */
