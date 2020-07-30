import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { StyleSheet, View, Modal, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";

export default function MenuModal(props) {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <Modal visible={props.isVisible}>
      <MaterialIcons name="close" size={36} onPress={props.close} />
      <View style={styles.container}>
        <View>
          <Text style={styles.txt}>Szechuans Restaurant</Text>
          <Text style={styles.subtxt}>Item: {props.item.dish}</Text>
          <Text style={styles.pricetxt}>
            Price: ${props.item.price.toFixed(2)}
          </Text>
          <Text style={{ fontSize: 30 }}>Quantity: </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 45 }}>
          <AntDesign
            name="minuscircleo"
            size={52}
            color="black"
            onPress={() => setQuantity(quantity >= 2 ? quantity - 1 : quantity)}
          />
          <Text
            style={{ marginHorizontal: 14, fontSize: 37, fontWeight: "bold" }}
          >
            {quantity}
          </Text>
          <AntDesign
            name="pluscircleo"
            size={52}
            color="black"
            onPress={() => setQuantity(quantity + 1)}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 28,
  },
  subtxt: {
    fontSize: 24,
    marginTop: 15,
  },
  pricetxt: {
    fontSize: 22,
  },
});
