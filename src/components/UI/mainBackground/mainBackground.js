import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import backgroundImage from '../../../assets/images/background.jpg';

const MainBackground = props => (
  <ImageBackground 
    source={backgroundImage}
    style={[styles.mainBackground, props.style]}
  >
    {props.children}
  </ImageBackground>
);
const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    width: '100%'
  }
});

export default MainBackground;