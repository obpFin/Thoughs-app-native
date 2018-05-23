import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MainText from '../UI/MainText/MainText';

class Thought extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <MainText>{this.props.text}</MainText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 100,
    padding: 10
  }
});

export default Thought;