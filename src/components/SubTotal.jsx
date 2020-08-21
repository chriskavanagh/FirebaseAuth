import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SubTotal() {
  return (
    <View style={styles.container}>
      <Text>Subtotal:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
