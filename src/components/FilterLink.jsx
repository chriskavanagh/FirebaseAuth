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
    color: "#580000",
    fontWeight: "bold",
    //textDecorationLine: "underline",
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#D8D8D8",
    padding: 5,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    width: 120,
    textAlign: "center",
    marginHorizontal: 5,
  },
});
