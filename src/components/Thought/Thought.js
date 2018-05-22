import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MainText from '../UI/MainText/MainText';

class Thought extends Component {
  constructor() {
    super(props);
  }
  render() {
    return (
      <View>
      <MainText>{props.thought}</MainText>
    </View>
    );
  }
}

export default Thought;