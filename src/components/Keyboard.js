/***************************************************************
 * FileName: Keyboard.js
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

export default class Keyboard extends Component {
  // Component should render only once
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }

  render() {
    return (
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardMargin}></View>
        <View style={styles.keyboardMain}>
          <View style={styles.keyboardRows}>
            {this.props.children}
          </View>
        </View>
        <View style={styles.keyboardMargin}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  } ,
  keyboardMargin: {
    flex: 0.05,
  } ,
  keyboardMain: {
    flex: 1,
  } ,
  keyboardRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  } ,
});

