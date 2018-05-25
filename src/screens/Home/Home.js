import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import MainBackground from '../../components/UI/mainBackground/mainBackground';
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
      <MainBackground>
        <View style={styles.container}>
          <ThoughtsList
            thoughts={this.props.thoughts}
          />
        </View>
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
});

const mapStateToProps = state => {
  return {
    thoughts: state.thoughts.thoughts
  }
}

export default connect(mapStateToProps)(HomeScreen);