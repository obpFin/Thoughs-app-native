import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';

import backgroundImage from '../../assets/images/background.jpg';
import MainHeadingtext from '../../components/UI/MainHeadingText/MainHeadingText';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    removeAnim: new Animated.Value(1)
  }
  loginHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true
    }).start(this.onLoginEnd);
  }
  onLoginEnd = () => {
    this.props.navigator.pop();
    this.props.navigator.resetTo({
      screen: 'thoughts.HomeScreen',
      title: 'Thoughts',
      animated: true,
      animationType: 'fade'
    });
  }
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Animated.View 
          style={
            [styles.container,
            {
              opacity: this.state.removeAnim,
              transform: [
                {
                  scale: this.state.removeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [12, 1]
                  })
                }
              ]
            }
            ]
          }
        >
          <TouchableOpacity onPress={this.loginHandler}>
            <MainHeadingtext>Thoughts</MainHeadingtext>
          </TouchableOpacity>
        </Animated.View>
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