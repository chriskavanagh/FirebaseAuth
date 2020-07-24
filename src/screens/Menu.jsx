import React, { useEffect, useState } from "react";
//import { List, Divider } from "react-native-paper";
import { Button, ListItem } from "react-native-elements";
//import { soupSelector, allSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import FilterLink from "../components/FilterLink";
import MenuModal from "../components/MenuModal";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { UserContext } from "../../App";
import {
  getMenu,
  filterSoup,
  filterBeef,
  filterChef,
  filterPork,
  filterVegetable,
} from "../redux/actions/menuActions";

export default function Menu({ navigation }) {
  const myState = useSelector((state) => state.menuReducer.items);
  //const user = useSelector((state) => state.userReducer.user);
  //const all = useSelector(allSelector);
  //const soup = useSelector(soupSelector);

  const dispatch = useDispatch();
  const myUser = React.useContext(UserContext);
  console.log(myUser);

  const [isVisible, setIsvisible] = useState(false);
  const [data, setData] = useState({});

  function passData(item) {
    setIsvisible(true);
    setData(item);
  }

  function closeModal() {
    setIsvisible(false);
  }

  return (
    <View style={styles.container}>
      <MenuModal isVisible={isVisible} item={data} close={closeModal} />
      <View style={styles.subContainer}>
        <FilterLink action={getMenu} dispatch={dispatch}>
          All
        </FilterLink>

        <FilterLink action={filterSoup} dispatch={dispatch}>
          Soup
        </FilterLink>

        <FilterLink action={filterBeef} dispatch={dispatch}>
          Beef
        </FilterLink>

        <FilterLink action={filterVegetable} dispatch={dispatch}>
          Vegetable
        </FilterLink>

        <FilterLink action={filterPork} dispatch={dispatch}>
          Pork
        </FilterLink>
      </View>
      <FlatList
        data={myState}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => passData(item)}>
            <ListItem
              title={item.dish}
              subtitle={`$${item.price.toFixed(2)}`}
              bottomDivider
              chevron
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Button
        style={styles.btn}
        title={myUser.email}
        onPress={() => navigation.navigate("Add Food")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  subContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "center",
  },
  subText: {
    paddingHorizontal: 10,
    color: "blue",
    textDecorationLine: "underline",
  },

  listTitle: {
    fontSize: 18,
  },
  btn: {
    marginVertical: 1,
    color: "green",
    width: "50%",
    alignSelf: "center",
  },
});
