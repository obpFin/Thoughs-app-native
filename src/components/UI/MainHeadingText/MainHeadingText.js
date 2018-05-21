import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainHeadingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontFamily: 'KaushanScript-Regular',
    fontSize: 62,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default MainHeadingText;