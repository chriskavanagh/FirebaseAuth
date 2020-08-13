import React from "react";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { addItem } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "react-native-paper";
//import Icon from "react-native-vector-icons/FontAwesome";
import AppTextInput from "./AppTextInput";
//import { ScrollView } from "react-native-gesture-handler";
import NumericInput from "react-native-numeric-input";
//import Icon from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, View, Modal, Text, ScrollView } from "react-native";

export default function MenuModal(props) {
  // destructure price from props.item;
  const {
    item: { price },
  } = props;

  //const itemPrice = price.toFixed(2);

  const [quantity, setQuantity] = React.useState(1);

  const [notes, setNotes] = React.useState("");
  console.log(notes);
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const myaddItem = (id, value, notes) => {
    dispatch(addItem(id, value, notes));
    onToggleSnackBar();
  };

  React.useEffect(() => {
    //console.log(`Quantity - ${quantity}`);
    console.log(`Price = ${price}`);
  });

  return (
    <Modal visible={props.isVisible}>
      <MaterialIcons name="close" size={36} onPress={props.close} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.subtxt}>{props.item.dish}</Text>
          <Text style={styles.pricetxt}>
            ${props.item.price ? props.item.price.toFixed(2) : 0}
          </Text>

          <Text style={{ fontSize: 34, marginBottom: 10 }}>Quantity</Text>
          <View>
            <NumericInput
              type="plus-minus"
              value={quantity}
              onChange={(value) => setQuantity(value)}
              totalWidth={220}
              totalHeight={50}
              iconSize={25}
              rightButtonBackgroundColor="#EA3788"
              leftButtonBackgroundColor="#E56B70"
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
          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
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
                  console.log("Item Added");
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
    //alignItems: "center",
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
