import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function FilterLink(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.dispatch(props.action());
      }}
    >
      <Text style={styles.subText}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subText: {
    paddingHorizontal: 10,
    color: "blue",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
