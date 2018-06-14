import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ThoughtType from './ThoughtType';
import MainText from '../UI/MainText/MainText';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

const Thought = props => (
  <View style={styles.container}>
    <View style={styles.thoughtHeader}>
      <MainText style={styles.creatorName}>
        {props.creatorName}
        <ThoughtType type={props.type} style={styles.smiley}/>
      </MainText>
      <MainText style={styles.date}>{moment(props.date).format('DD/MM/YYYY')}</MainText>
    </View>
    <MainText>{props.text}</MainText>
    {props.editAllowed ? 
      <TouchableOpacity>
        <Icon style={styles.edit} name="ios-create" size={25} color="#007AFF"/>
      </TouchableOpacity>
      :
      null
    }

  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: 100,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  thoughtHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  creatorName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  smiley: {
    marginLeft: 10
  },
  date: {
    fontSize: 14,
    paddingBottom: 13,
    color: 'grey',
    alignSelf: 'flex-end',
  },
  edit: {
    paddingTop: 30,
    paddingLeft: 10
  }
});

export default Thought;