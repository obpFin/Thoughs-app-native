import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import backgroundImage from '../../assets/images/background.jpg';
import MainHeadingtext from '../../components/UI/MainHeadingText/MainHeadingText';

class AuthScreen extends Component {
  handleLoginButton = () => {
    this.props.navigator.push({
      screen: 'thoughts.HomeScreen',
      title: 'Thoughts',
      animated: true,
      animationType: 'fade'
    });
  }
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.handleLoginButton}>
            <MainHeadingtext>Thoughts</MainHeadingtext>
          </TouchableOpacity>
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
})

export default AuthScreen;