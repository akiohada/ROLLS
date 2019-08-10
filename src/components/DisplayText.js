/***************************************************************
 * FileName: DisplayText.js
 * Descripsion: ROLLS
 * Copyright: akiohada
 * Original Author: Akio Hada
 * Date Created: 2019-08-01
***************************************************************/

//Packages
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DisplayText extends Component {
  render() {
    return (
      <View style={styles.displayTextContainer} >
        <Text style={styles.displayText} >{this.props.output}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayTextContainer: {
    height: 100,
  } ,
  displayText: {
    fontSize: 50,
    textAlign: 'center',
  } ,
});

