import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import MainText from '../UI/MainText/MainText';
import Thought from '../Thought/Thought';

const ProfileThoughtsList = (props) => (
  <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={props.thoughts.sort((a,b) => b.date - a.date)}
      renderItem={( info ) => (
        <Thought
          key={info.id}
          text={info.item.text}
        />
      )}
      keyExtractor={(item,index) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%',
  }
});

export default ProfileThoughtsList;