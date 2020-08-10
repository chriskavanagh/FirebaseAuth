import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
//<AntDesign name="edit" size={24} color="black" />

export default function AppTextInput(props) {
  return (
    <View style={styles.container}>
      {props.icon && (
        <AntDesign
          name={props.icon}
          size={28}
          color="#191970"
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        maxLength={55}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    flexDirection: "row",
    width: "100%",
    marginVertical: 20,
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    height: 35,
    width: "85%",
  },
  icon: {
    marginRight: 20,
    paddingTop: 3,
  },
});
