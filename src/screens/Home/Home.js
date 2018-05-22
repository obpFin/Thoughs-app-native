import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import backgroundImage from '../../assets/images/background.jpg';

class HomeScreen extends Component {
  render() {
    this.props.navigator.setStyle({
      navBarTextFontFamily: 'KaushanScript-Regular',
    });
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.text}>Home</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;