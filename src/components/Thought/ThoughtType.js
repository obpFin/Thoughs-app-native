import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import happy from '../../assets/images/Smiling_Face_Emoji.png';
import shocked from '../../assets/images/Surprised_Face_Emoji.png';
import sad from '../../assets/images/Sleeping_with_Snoring_Emoji.png';
import excited from '../../assets/images/Sunglasses_Emoji.png';

const smileys = [happy];

const getEmoji = type => {
  switch(type) {
    case 'happy': {
      return happy;
    }
    case 'sad': {
      return sad;
    }
    case 'shocked': {
      return shocked;
    }
    case 'excited': {
      return excited;
    }
    default: {
      return happy;
    }
  }
}

const ThoughtType = props => (
  <View>
    <Image style={[styles.smiley, props.style]} source={getEmoji(props.type)} />
  </View>
);

const styles = StyleSheet.create({
  smiley: {
    width: 20,
    height: 20
  }
});

export default ThoughtType;
