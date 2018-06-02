import React, { Component } from 'react';
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
  Keyboard,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { addThought } from '../../store/actions/index';
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
      this.handleAddThought();
      this.setState({text: ''});
    }
  }
  handleAddThought = () => {
    if (this.state.text.trim() != '') {
      this.props.onAddThought({text: this.state.text})
    }
  }
  render() {
    this.props.navigator.setStyle({
      navBarTextFontFamily: 'KaushanScript-Regular',
    });
    return (
      <MainBackground>
        <ScrollView >
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
        </ScrollView>
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

const mapDispatchToProps = dispatch => {
  return {
    onAddThought: (thought) => dispatch(addThought(thought))
  }
}

export default connect(null, mapDispatchToProps)(AddThoughtScreen);