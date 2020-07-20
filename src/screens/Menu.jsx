import React, { useEffect, useState } from "react";
import { List } from "react-native-paper";
import { Button } from "react-native-elements";
import { soupSelector, allSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
//import { getMenu } from "../redux/actions/menuActions";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { filterSoup, filterBeef } from "../redux/actions/menuActions";

export default function Menu({ navigation }) {
  const myState = useSelector((state) => state.menuReducer.items);
  const all = useSelector(allSelector);
  const soup = useSelector(soupSelector);
  console.log(all);
  //console.log(`The ${JSON.stringify(soup)}`);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={myState}
        renderItem={({ item }) => (
          <List.Item
            title={item.dish}
            description={item.price.toFixed(2)}
            descriptionNumberOfLines={1}
            titleStyle={styles.listTitle}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => {
            dispatch(filterSoup());
          }}
        >
          <Text style={styles.subText}> Filter Soup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(filterBeef());
          }}
        >
          <Text style={styles.subText}>Filter Beef</Text>
        </TouchableOpacity>
      </View>

      <Button
        style={styles.btn}
        title="Add Food"
        onPress={() => navigation.navigate("Add Food")}
      />
      {/* <Button
        title="Get Soup"
        type="outline"
        onPress={() => dispatch(filterSoup())}
      />

      <Button
        style={styles.btn}
        title="Get Beef"
        type="outline"
        onPress={() => dispatch(filterBeef())}
      /> */}
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
    marginHorizontal: 10,
  },
  subText: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
  btn: {
    marginVertical: 5,
    color: "green",
  },
});
