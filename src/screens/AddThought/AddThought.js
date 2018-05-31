import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';

import MainBackground from '../../components/UI/mainBackground/mainBackground';
import MainText from '../../components/UI/MainText/MainText';
import MainHeadingText from '../../components/UI/MainHeadingText/MainHeadingText';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';
import SubmitButton from '../../components/UI/SubmitButton/SubmitButton';

class AddThoughtScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: ''
  }
  onChangeText = (text) => {
    this.setState({
      text
    });
  }
  handleOnPress = (e) => {
    text = this.state.text.trim();
    if (text) {
      Keyboard.dismiss();
      alert(text)
      this.setState({text: ''});
    }
  }
  render() {
    this.props.navigator.setStyle({
      navBarTextFontFamily: 'KaushanScript-Regular',
    });
    return (
      <MainBackground>
        <View style={styles.container}>
          <MainHeadingText style={styles.header}>Add Thought</MainHeadingText>
          <TextAreaInput
            style={styles.textInput}
            value={this.state.text}
            onChangeText={this.onChangeText}
            multiline = {true}
            numberOfLines = {4}
            placeholder="What's on your mind?"
          />
          <SubmitButton
            style={styles.button}
            handleOnPress={this.handleOnPress}
          >
            SUBMIT
          </SubmitButton>
        </View>
      </MainBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  header: {
    padding: 22
  },
  textInput: {
    width: '80%',
    height: 150
  },
  button: {
    margin: 50
  }
});

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(mapStateToProps)(AddThoughtScreen);