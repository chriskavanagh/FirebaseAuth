import React from "react";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { addItem } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "react-native-paper";
import AppTextInput from "./AppTextInput";
import NumericInput from "react-native-numeric-input";
import { StyleSheet, View, Modal, Text, ScrollView } from "react-native";

export default function MenuModal(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [notes, setNotes] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  // redux dispatch & selector
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const user = useSelector((state) => state.userReducer.user);
  //console.log(user);
  //console.log(cart);

  // toggle for snackbar
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  // add item to cart
  const myaddItem = (id, value, notes) => {
    dispatch(addItem(id, value, notes));
    onToggleSnackBar();
    setQuantity(1);
    setNotes("");
  };

  return (
    <Modal visible={props.isVisible}>
      <MaterialIcons name="close" size={36} onPress={props.close} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.subtxt}>{props.item.dish}</Text>
          {/* <Text style={styles.subtxt}>{user.email}</Text> */}
          <Text style={styles.pricetxt}>
            ${props.item.price ? props.item.price.toFixed(2) : 0}
          </Text>

          <Text style={{ fontSize: 22, marginBottom: 10 }}>Quantity</Text>
          <View>
            <NumericInput
              type="plus-minus"
              minValue={1}
              maxValue={10}
              value={quantity}
              onChange={(value) => setQuantity(value)}
              totalWidth={220}
              totalHeight={50}
              iconSize={25}
              rightButtonBackgroundColor="#0000FF"
              leftButtonBackgroundColor="#FF0000"
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <AppTextInput
              style={styles.txtInput}
              placeholder="Special Instructions. . ."
              placeholderTextColor="#191970"
              icon="edit"
              value={notes}
              onChangeText={(text) => setNotes(text)}
            />
          </View>
          <View
            style={{ paddingHorizontal: 10, paddingVertical: 5, width: "100%" }}
          >
            <Button
              title="MenuModal Dev Branch"
              type="outline"
              onPress={() => myaddItem(props.item.id, quantity, notes)}
            />

            <Snackbar
              visible={visible}
              duration={2000}
              onDismiss={onDismissSnackBar}
              action={{
                label: "Close",
                onPress: () => {
                  console.log(props.item.dish);
                },
              }}
            >
              {props.item.dish} added to Cart!
            </Snackbar>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    //justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  txt: {
    fontSize: 28,
  },
  subtxt: {
    fontSize: 26,
    marginTop: 25,
  },
  pricetxt: {
    fontSize: 18,
  },
  txtInput: {
    height: 45,
    marginTop: 5,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
});
