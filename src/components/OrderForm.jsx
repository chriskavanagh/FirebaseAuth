import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
//import Select from "react-select";
//import "react-select/dist/react-select.css";
import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import Select from "react-select";
//import "react-select/dist/react-select.css";

const validationSchema = Yup.object({
  //quantity: Yup.number().min(1).required("Required"),
  notes: Yup.string().required("Required"),
});

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const MySelect = (props) => {
  const handleChange = (value) => {
    props.onChangeText("quantity", value);
  };
  return (
    <Select
      options={options}
      multi={true}
      onChange={handleChange}
      value={props.value}
      placeholder="Quantity"
    />
  );
};

function OrderForm() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ quantity: "", notes: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <Form>
            <View>
              <MySelect
                value={props.values.quantity}
                onChangeText={props.setFieldValue}
              />
              <TextInput
                style={styles.input}
                placeholder="Notes"
                onChangeText={props.handleChange("notes")}
                value={props.values.notes}
              />

              <Button
                color="maroon"
                title="Submit"
                onPress={props.handleSubmit}
              />
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </View>
          </Form>
        )}
      </Formik>
    </View>
  );
}

export default OrderForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

{
  /* <TextInput
  multiline
  placeholder="Add Notes"
  onChangeText={props.handleChange("notes")}
  value={props.values.count}
  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
  /> */
}
