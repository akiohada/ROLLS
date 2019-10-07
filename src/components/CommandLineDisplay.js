/***************************************************************
 * FileName: CommandLineDisplay.js
 * Descripsion: ROLLS
 * Copyright: akiohada
 * Original Author: Akio Hada
 * Date Created: 2019-08-01
 ***************************************************************/

//Packages
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CommandLineDisplay extends Component {
  render() {
    return (
      <View style={styles.commandLineDisplayContainer}>
        <View style={styles.commandLineDisplayMargin} />
        <View style={styles.commandLineDisplayMain}>
          <Text style={styles.commandLineDisplayText}>
            > {this.props.formula}
          </Text>
        </View>
        <View style={styles.commandLineDisplayMargin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commandLineDisplayContainer: {
    height: 16,
    flexDirection: "row"
  },
  commandLineDisplayMargin: {
    flex: 0.1
  },
  commandLineDisplayMain: {
    flex: 1
  },
  commandLineDisplayText: {
    color: "green",
    fontSize: 14
  }
});
