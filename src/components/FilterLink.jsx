import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function FilterLink({ dispatch, action, children }) {
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(action());
      }}
    >
      <Text style={styles.subText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subText: {
    paddingHorizontal: 10,
    color: "#DA70D6",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
