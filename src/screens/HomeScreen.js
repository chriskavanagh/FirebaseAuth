import React, { useState } from "react";
import moment from "moment";
import firebase from "../firebase/config";
import { Button } from "react-native-elements";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function HomeScreen({ route }) {
  //const [entityText, setEntityText] = useState("");
  //const [entities, setEntities] = useState([]);
  const [data, setData] = useState([]);

  const { user, id } = route.params;

  /* const getData = async () => {
    const db = firebase.firestore();
    const cartRef = db.collection("menu");
    const snapshot = await cartRef.get();
    const newEntities = [];
    snapshot.forEach((doc) => {
      const entity = doc.data();
      entity.id = doc.id;
      newEntities.push(entity);
      console.log(doc.id, "=>", doc.data());
      setData(newEntities);
    });
  }; */

  const getData = () => {
    const today = moment().format("MM/DD/YYYY HH:mm:ss");
    firebase
      .firestore()
      .collection("mail")
      .add({
        to: [
          "chriskkavanagh@gmail.com",
          "ckava3@gmail.com",
          "chriskavanagh@cox.net",
        ],
        message: {
          subject: "Szechuans Restaurant Online Order",

          html: `Hello Chris, Your Order ${today}
                <pre>
                1 Gen Chicken
                1 Sesame Chicken
                2 Egg Rolls
                </pre>`,
        },
      });
  };

  return (
    <View style={styles.container}>
      <Text>This is HomeScreen!</Text>
      <Text style={{ padding: 5 }}>Welcome {JSON.stringify(user)}</Text>
      <Text style={{ padding: 5 }}>You're ID: {JSON.stringify(id)}</Text>
      <Button onPress={getData} title="Get Data" style={styles.btn} />
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  listContainer: {
    marginTop: 20,
    padding: 20,
  },
  entityContainer: {
    marginTop: 16,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  entityText: {
    fontSize: 20,
    color: "#333333",
  },
  btn: {
    marginTop: 5,
  },
});

/* import React, { useState } from "react";
import { firebase } from "../firebase/config";
import { Button } from "react-native-elements";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function HomeScreen({ route }) {
  //const [entityText, setEntityText] = useState("");
  //const [entities, setEntities] = useState([]);
  const [data, setData] = useState([]);

  const { user, id } = route.params;

  const getData = async () => {
    const db = firebase.firestore();
    const cartRef = db.collection("cart");
    const snapshot = await cartRef.get();
    const newEntities = [];
    snapshot.forEach((doc) => {
      const entity = doc.data();
      entity.id = doc.id;
      newEntities.push(entity);
      console.log(doc.id, "=>", doc.data());
      setData(newEntities);
    });
  };

  return (
    <View style={styles.container}>
      <Text>This is HomeScreen!</Text>
      <Text style={{ padding: 5 }}>Welcome {JSON.stringify(user)}</Text>
      <Text style={{ padding: 5 }}>You're ID: {JSON.stringify(id)}</Text>
      <Button onPress={getData} title="Get Data" style={styles.btn} />
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.data.name}</Text>}
          keyExtractor={(item) => item.data.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  listContainer: {
    marginTop: 20,
    padding: 20,
  },
  entityContainer: {
    marginTop: 16,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  entityText: {
    fontSize: 20,
    color: "#333333",
  },
  btn: {
    marginTop: 5,
  },
}); */
