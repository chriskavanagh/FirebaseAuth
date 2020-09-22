import React from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
//import { CreditCardInput } from "react-native-credit-card-input";
import StripeCheckout from "expo-stripe-checkout";

export default function Checkout() {
  const onPaymentSuccess = (token) => {
    // send the stripe token to your backend!
  };

  const onClose = () => {
    console.log("Done Checkout");
    // maybe navigate to other screen here?
  };
  return (
    <StripeCheckout
      publicKey="pk_test_51HTJOZJpGJGqUhHBUgpeQdMdC3AdxHmJnTNdJpAWpnk3zVKgAC2KkKhhbrrhASpx2ZSwr2tiDkoravwyngTH0MDl00WhfLJPzE"
      amount={100000}
      imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
      storeName="Stripe Checkout"
      description="Test"
      currency="USD"
      allowRememberMe={false}
      prepopulatedEmail="ckava3@gmail.com"
      onClose={onClose}
      onPaymentSuccess={onPaymentSuccess}
    />
  );
}
