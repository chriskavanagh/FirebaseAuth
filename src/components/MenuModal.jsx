import React from "react";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { addItem } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, Modal, Text } from "react-native";
import { Snackbar } from "react-native-paper";

export default function MenuModal(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [notes, setNotes] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const myaddItem = (id, quantity, notes) => {
    dispatch(addItem(id, quantity, notes));
    onToggleSnackBar();
  };

  return (
    <Modal visible={props.isVisible}>
      <MaterialIcons name="close" size={36} onPress={props.close} />
      <View style={styles.container}>
        {/* <Text style={styles.txt}>Szechuans Restaurant</Text> */}
        <Text style={styles.subtxt}>{props.item.dish}</Text>
        <Text style={styles.pricetxt}>${props.item.price}</Text>

        <View style={{ marginTop: 45 }}>
          <Text style={{ fontSize: 34, marginBottom: 10 }}>Quantity</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <AntDesign
              name="minuscircleo"
              size={52}
              color="black"
              onPress={() =>
                setQuantity(quantity >= 2 ? quantity - 1 : quantity)
              }
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
        <TextInput
          value={notes}
          onChangeText={(text) => setNotes(text)}
          maxLength={30}
          style={styles.txtInput}
        />
        <Button
          titleStyle={{ marginLeft: 5 }}
          icon={<Icon name="check-circle" size={18} color="white" />}
          title="Add Item"
          onPress={() => myaddItem(props.item.id, quantity, notes)}
        />
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Close",
            onPress: () => {
              console.log("Item Added");
            },
          }}
        >
          {props.item.dish} added to Cart!
        </Snackbar>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  txt: {
    fontSize: 28,
  },
  subtxt: {
    fontSize: 28,
    marginTop: 15,
  },
  pricetxt: {
    fontSize: 26,
  },
  txtInput: {
    height: 25,
    borderColor: "gray",
    borderWidth: 1,
  },
});
