import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Modal, Text } from "react-native";

export default function MenuModal(props) {
  return (
    <Modal visible={props.isVisible}>
      <View>
        <MaterialIcons name="close" size={24} onPress={props.close} />
        <Text>Hello From Modal</Text>
        <Text>Item: {props.item.dish}</Text>
        <Text>Price: ${props.item.price}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
