import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import MainText from '../UI/MainText/MainText';
import Thought from '../Thought/Thought';

const ThoughtContainer = (props) => (
  <View style={styles.container}>
    <FlatList 
      data={[
        {key: 'Thought1'},
        {key: 'Thought2'},
        {key: 'Thought3'},
        {key: 'Thought4'},
        {key: 'Thought4'},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
})

export default ThoughtContainer;