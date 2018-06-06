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
        { this.props.creatorName && <MainText style={styles.creatorName}>{this.props.creatorName}</MainText> }
        <MainText>{this.props.text}</MainText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: 100,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  creatorName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10
  }
});

export default Thought;