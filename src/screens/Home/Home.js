import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import backgroundImage from '../../assets/images/background.jpg';
import ThoughtsList from '../../components/ThoughtsList/ThoughtsList';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props.navigator.setStyle({
      navBarTextFontFamily: 'KaushanScript-Regular',
    });
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <ThoughtsList
            thoughts={this.props.thoughts}
          />
        </View>
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
});

const mapStateToProps = state => {
  return {
    thoughts: state.thoughts.thoughts
  }
}

export default connect(mapStateToProps)(HomeScreen);