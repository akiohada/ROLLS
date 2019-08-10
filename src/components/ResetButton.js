/***************************************************************
 * FileName: ResetButton.js
 * Descripsion: ROLLS
 * Copyright: akiohada
 * Original Author: Akio Hada
 * Date Created: 2019-08-01
***************************************************************/

//Packages
import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ResetButton extends Component {
  // Component should render only once
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }

  //to handle button press action/event
  _handleOnPress = (number) => {
    const value = [number, 1];
    this.props.onBtnPress(value);
  }

  render() {
    return (
      <View style={styles.resetButtonContainer} >
          <TouchableOpacity onPress={() => this._handleOnPress('Reset')} >
              <Text style={styles.resetButtonText} >Reset</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resetButtonContainer: {
    height: 30,
  } ,
  resetButtonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  } ,
});

