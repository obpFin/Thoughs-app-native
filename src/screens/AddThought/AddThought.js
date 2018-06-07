import React, { Component } from 'react';
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
  Keyboard,
  View,
  PickerIOS
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
    text: '',
    type: ''
  }
  onChangeText = (text) => {
    this.setState({text});
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
      this.props.onAddThought({
        text: this.state.text,
        type: this.state.type
      });
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
            <PickerIOS
              selectedValue={this.state.type}
              style={styles.picker}
              itemStyle={{color: 'white'}}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}
            >
              <PickerIOS.Item label="Happy" value="happy" />
              <PickerIOS.Item label="Excited" value="excited" />
              <PickerIOS.Item label="Sad" value="sad" />
              <PickerIOS.Item label="Shocked" value="shocked" />
            </PickerIOS>
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
  picker: {
    width: 200,
    height: 200
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