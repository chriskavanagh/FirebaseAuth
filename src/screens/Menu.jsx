import React, { useEffect, useState } from "react";
//import { List, Divider } from "react-native-paper";
import { Button, ListItem } from "react-native-elements";
//import { soupSelector, allSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
//import { getMenu } from "../redux/actions/menuActions";
import FilterLink from "../components/FilterLink";
import { StyleSheet, View, FlatList } from "react-native";
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
  //const all = useSelector(allSelector);
  //const soup = useSelector(soupSelector);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
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
          <ListItem
            title={item.dish}
            subtitle={`$${item.price.toFixed(2)}`}
            bottomDivider
            chevron
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Button
        style={styles.btn}
        title="Add Food"
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
    marginVertical: 5,
    color: "green",
    width: "50%",
    alignSelf: "center",
  },
});
