/***************************************************************
 * FileName: RollButton.js
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

export default class RollButton extends Component {
  // Component should render only once
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }

  //to handle button press action/event
  _handleOnPress = (number) => {
    const value = [number, 1];
    this.props.onBtnPress(value);
  }
  _handleOnLongPress = (number) => {
    const value = [number, 2];
    this.props.onBtnLongPress(value);
  }

  render() {
    return (
      <View style={styles.rollButtonContainer} >
      <View style={styles.rollButtonMargin} ></View>
      <View style={styles.rollButtonMain} >
        <TouchableOpacity
          onPress={() => this._handleOnPress('Roll')}
          onLongPress={() => this._handleOnLongPress('Roll')}
        >
          <View style={styles.circleButtonContainer} >
            <View style={styles.circleButtonCircle} >
              <Text style={styles.circleButtonText} >Roll</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rollButtonMargin} ></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rollButtonContainer: {
    height: 100,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:  'green',
  } ,
  rollButtonMargin: {
    flex: 0.1,
  } ,
  rollButtonMain: {
    flex: 1,
  } ,
  circleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } ,
  circleButtonCircle: {
    padding: 3,
    height: 80,
    width: 350,
    borderRadius: 40,
    backgroundColor: 'white',
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } ,
  circleButtonText: {
    fontSize: 30,
  } ,
  circleButtonTextLower: {
    fontSize: 15,
  } ,
});

