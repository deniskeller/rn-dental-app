import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function BaseInput(props) {
  const [value, setValue] = React.useState('');

  const valueToParent = (value) => {
    setValue(value);
    props.handleInputChange(value);
  };

  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.formFieldText}
        onChange={(e) => valueToParent(e.nativeEvent.text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formFieldWrapper: {},
  formFieldText: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
  },
  labelText: {
    fontSize: 20,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
});
