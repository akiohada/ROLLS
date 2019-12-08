/* eslint-disable prettier/prettier */
/***************************************************************
 * FileName: Base.js
 * Descripsion: ROLLS
 * Copyright: akiohada
 * Original Author: Akio Hada
 * Date Created: 2019-08-01
 ***************************************************************/

//Packages
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

export default class Base extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.baseContainer]}>
        <View style={styles.baseMain}>{this.props.children}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  baseMain: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'black',
  },
});
