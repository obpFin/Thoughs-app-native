import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainText = props => (
  <Text style={[styles.mainText, props.style]}>{props.children}</Text>
);
const styles = StyleSheet.create({
  mainText: {
    color: "black",
    fontFamily: 'Gill Sans'
  }
});

export default MainText;