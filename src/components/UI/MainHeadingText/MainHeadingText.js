import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainHeadingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'GeezaPro-Bold',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  }
});

export default MainHeadingText;