import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
//import { CreditCardInput } from "react-native-credit-card-input";
import stripe from "tipsi-stripe";
import Button from "../components/Button";

stripe.setOptions({
  publishableKey:
    "pk_test_51HTJOZJpGJGqUhHBUgpeQdMdC3AdxHmJnTNdJpAWpnk3zVKgAC2KkKhhbrrhASpx2ZSwr2tiDkoravwyngTH0MDl00WhfLJPzE",
});

export default class CardFormScreen extends PureComponent {
  static title = "Card Form";

  state = {
    loading: false,
    token: null,
  };

  handleCardPayPress = async () => {
    try {
      this.setState({ loading: true, token: null });
      const token = await stripe.paymentRequestWithCardForm({
        // Only iOS support this options
        smsAutofillDisabled: true,
        requiredBillingAddressFields: "full",
        prefilledInformation: {
          billingAddress: {
            name: "Gunilla Haugeh",
            line1: "Canary Place",
            line2: "3",
            city: "Macon",
            state: "Georgia",
            country: "US",
            postalCode: "31217",
            email: "ghaugeh0@printfriendly.com",
          },
        },
      });

      this.setState({ loading: false, token });
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, token } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Card Form Example</Text>
        <Text style={styles.instruction}>
          Click button to show Card Form dialog.
        </Text>
        <Button
          text="Enter you card and pay"
          loading={loading}
          onPress={this.handleCardPayPress}
        />
        <View style={styles.token}>
          {token && (
            <Text style={styles.instruction}>Token: {token.tokenId}</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instruction: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
});

/* export default function Checkout({ route }) {
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
        {items.map((item) => {
        return (
          <View key={item.id}>
            <Text style={{ fontSize: 17 }}>{item.dish}</Text>
            <Text style={{ fontSize: 15 }}>{item.quantity}</Text>
            <Text style={{ fontSize: 15 }}>{item.notes}</Text>
          </View>
        );
      })} 
    </View>
  );
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 1,
  },
}); */
