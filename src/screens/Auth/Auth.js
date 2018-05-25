import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';

import MainHeadingtext from '../../components/UI/MainHeadingText/MainHeadingText';
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
    this.props.navigator.pop();
    /*
    this.props.navigator.resetTo({
      screen: 'thoughts.HomeScreen',
      title: 'Thoughts',
      animated: true,
      animationType: 'fade'
    });
    */
   startTabs();
  }
  render() {
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
            <MainHeadingtext>Thoughts</MainHeadingtext>
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