import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function BaseInput(props) {
  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.formFieldText}
        value={props.value}
        {...props.textInputProps}
        onChange={(e) => props.handleInputChange(e.nativeEvent.text)}
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
