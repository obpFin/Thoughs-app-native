import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import MainHeadingText from '../../components/UI/MainHeadingText/MainHeadingText';
import MainBackground from '../../components/UI/mainBackground/mainBackground';
import ThoughtsList from '../../components/ThoughtsList/ThoughtsList';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.props.navigator.setStyle({
      navBarTextFontFamily: 'KaushanScript-Regular',
    });
    return (
      <MainBackground>
        <View style={styles.container}>
          <MainHeadingText style={styles.header}>
            Your Thoughts
          </MainHeadingText>
        </View>
      </MainBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    padding: 22
  },
});

const mapStateToProps = state => {
  return {
    thoughts: state.thoughts.thoughts
  }
}

export default connect(mapStateToProps)(ProfileScreen);