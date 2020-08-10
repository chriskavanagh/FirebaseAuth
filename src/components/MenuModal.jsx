import React from "react";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { addItem } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "react-native-paper";
//import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import AppTextInput from "./AppTextInput";
//import { ScrollView } from "react-native-gesture-handler";
import NumericInput from "react-native-numeric-input";

export default function MenuModal(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [notes, setNotes] = React.useState("");
  console.log(notes);
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.subtxt}>{props.item.dish}</Text>
          <Text style={styles.pricetxt}>${props.item.price}</Text>

          <Text style={{ fontSize: 34, marginBottom: 10 }}>Quantity</Text>
          <View>
            <NumericInput
              type="plus-minus"
              onChange={(value) => console.log(value)}
              totalWidth={200}
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
