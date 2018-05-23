import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import MainText from '../UI/MainText/MainText';
import Thought from '../Thought/Thought';

const ThoughtsList = (props) => (
  <View style={styles.container}>
    <FlatList
      data={props.thoughts}
      renderItem={( info ) => (
        <Thought
          style={styles.item}
          text={info.item.text}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 22
  }
});

export default ThoughtsList;