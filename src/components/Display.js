/***************************************************************
 * FileName: Display.js
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

export default class Display extends Component {
  render() {
    return (
      <View style={styles.displayContainer} >
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  } ,
});

