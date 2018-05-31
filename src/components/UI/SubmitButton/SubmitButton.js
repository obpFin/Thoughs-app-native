import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SubmitButton = (props) => (
  <TouchableOpacity onPress={props.handleOnPress}>
  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
    style={[styles.container, props.style]} 
    start={{ y: 0.0, x: 0.0 }}
    end={{ y: 0.0, x: 1.0 }}
  >
    <View>
      <Text style={styles.buttonText}>
        {props.children}
      </Text>
    </View>
</LinearGradient>
</TouchableOpacity>


);

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#FFFF',
    backgroundColor: 'transparent',
  },
});

export default SubmitButton;