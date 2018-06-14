import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextAreaInput = (props) => (
  <TextInput
    {...props}
    style={[styles.textInput, props.style]}
    onChangeText={props.onChangeText}
    autoCorrect={false}
  />
);

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    padding: 5 
  }
});

export default TextAreaInput;

