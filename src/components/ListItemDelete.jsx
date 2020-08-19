import React from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDelete({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name="trash"
          type="font-awesome-5"
          color="white"
          size={36}
          //containerStyle={{ marginRight: 3 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "red",
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
});
