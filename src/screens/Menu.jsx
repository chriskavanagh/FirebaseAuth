import React from "react";
import { Button } from "react-native-elements";
import { List } from "react-native-paper";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { getMenu } from "../redux/actions/menuActions";
import { useSelector, useDispatch } from "react-redux";

export default function Menu() {
  const { poultryById } = useSelector((state) => state.menuReducer);
  const { allIds } = poultryById;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={allIds}
        renderItem={({ item }) => (
          <List.Item
            title={poultryById[item].name}
            description={poultryById[item].price}
            descriptionNumberOfLines={1}
            titleStyle={styles.listTitle}
          />
        )}
        keyExtractor={(item) => poultryById[item].id.toString()}
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
});
