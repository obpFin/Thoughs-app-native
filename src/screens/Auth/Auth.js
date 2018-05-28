import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';

import AppHeadingText from '../../components/UI/AppHeadingText/AppHeadingText';
import MainBackground from '../../components/UI/mainBackground/mainBackground';
import startTabs from '../mainTabs/startMainTabs';

import SplashScreen from 'react-native-splash-screen';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    removeAnim: new Animated.Value(1)
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  loginHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true
    }).start(this.onLoginEnd);
  }
  onLoginEnd = () => {
    startTabs();
  }
  render() {
    this.props.navigator.setStyle({
      navBarTextFontFamily: 'KaushanScript-Regular',
    });
    return (
      <MainBackground>
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
            <AppHeadingText>Thoughts</AppHeadingText>
          </TouchableOpacity>
        </Animated.View>
      </MainBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AuthScreen;