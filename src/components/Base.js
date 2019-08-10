/***************************************************************
 * FileName: Base.js
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

export default class Base extends Component {
  render() {
    const backgroundColor = {
      backgroundColor: `${this.props.color}`,
    };

    return (
      <View style={[styles.baseContainer, backgroundColor]} >
        <View style={styles.baseMargin}></View>
        <View style={styles.baseMain}>
          {this.props.children}
        </View>
        <View style={styles.baseMargin}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  } ,
  baseMargin: {
    height: 30,
  },
  baseMain: {
    flex: 1,
    flexDirection: 'column-reverse',
  } ,
});

