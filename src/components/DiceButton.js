/***************************************************************
 * FileName: DiceButton.js
 * Descripsion: ROLLS
 * Copyright: akiohada
 * Original Author: Akio Hada
 * Date Created: 2019-08-01
***************************************************************/

//Packages
import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class DiceButton extends Component {
  // Component should render only once
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }

  //to handle button press action/event
  _handleOnPress = (value) => {
    const returnValue = [value, 1]; 
    this.props.onBtnPress(returnValue);
  }
  _handleOnLongPress = (value) => {
    const returnValue = [value, 2]; 
    this.props.onBtnLongPress(returnValue);
  }

  render() {
    const fontSizeNumber = parseInt(this.props.fontSize);
    const backgroundColor = {
      backgroundColor: 'green',
    };
    const fontSize = {
      fontSize: fontSizeNumber, 
    };

    return (
      <View style={styles.circleButtonContainer} >
        <TouchableOpacity
          onPress={() => this._handleOnPress(this.props.number)}
          onLongPress={()  => this._handleOnLongPress(this.props.number)}
        >
          <View style={[styles.circleButtonCircle, backgroundColor]} >
            <Text style={[styles.circleButtonText, fontSize]} >
              {this.props.number}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } ,
  circleButtonCircle: {
    padding: 3,
    height: 80,
    width: 80,
    borderRadius: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  } ,
  circleButtonText: {
    color: 'white',
  } ,
});

