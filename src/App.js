/* eslint-disable prettier/prettier */
/***************************************************************
 * FileName: App.js
 * Descripsion: ROLLS
 * Copyright: akiohada
 * Original Author: Akio Hada
 * Date Created: 2019-08-01
***************************************************************/

//Packages
import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

//Custom Components
import Base from './components/Base.js';
import Keyboard from './components/Keyboard.js';
import DiceButton from './components/DiceButton.js';
import CommandLineDisplay from './components/CommandLineDisplay.js';
import Display from './components/Display.js';
import DisplayText from './components/DisplayText.js';
import RollButton from './components/RollButton.js';
import ResetButton from './components/ResetButton.js';

//Constants
const initialOutput = '0';
const initialFormula = '';
const initialDiceArr = [
  [4, 0, ''],
  [6, 0, ''],
  [8, 0, ''],
  [10, 0, ''],
  [12, 0, ''],
  [20, 0, ''],
  [100, 0, ''],
];

//Container class
export default class App extends Component {
  // Initializations
  constructor(props) {
    super(props);
    this.state = {
      _output: initialOutput,
      _outputFormula: initialFormula,
      _calculateFormula: initialFormula,
      _diceArr: [],
    };
    this._handleEvent = this._handleEvent.bind(this);
  }

  //Function handles action
  _handleEvent = (value) => {
    if (isNaN(value[0]) && value[0] !== 'Roll' && value[0] !== 'Reset') {
      this.setState({
        _output: `invalid ${value[0]}`,
      });
    }
    else {
      switch (value[0]) {
        case 'Roll':
          if (value[1] === 1) {
            this._rollDice();
            break;
          }
          else if (value[1] === 2) {
            this._clear();
            break;
          }
          else {
            break;
          }

        case 'Reset':
          this._clear();
          break;

        default:
          this.setState({
            _output: `+ d${value[0]}`,
          });
          this._concatToOutput(value[0]);
          this._concatToEvaluate(value[0]);
          break;
      }
    }
  }

  //Function roll Dice
  _rollDice = () => {
    let results = '';
    let diceResult = 0;
    let dEval = 0;
    let dEvalCritical = 0;
    let dEvalFumble = 0;
    for (let i = 0; i < this.state._diceArr.length; i++) {
      for (let j = 0; j < this.state._diceArr[i][1]; j++) {
        diceResult = Math.floor(Math.random() * this.state._diceArr[i][0]) + 1;
        dEval = dEval + diceResult;
        dEvalCritical = dEvalCritical + this.state._diceArr[i][0];
        dEvalFumble = dEvalFumble + 1;
        if (j === 0) {
          results = 'd' + this.state._diceArr[i][0] + '[' + diceResult + ']';
          continue;
        } else if (j > 0) {
          results = results + ' + d' + this.state._diceArr[i][0] + '[' + diceResult + ']';
          continue;
        }
      }
    }
    if (dEval === dEvalCritical) {
      results = '!!!CRITICAL!!!  ' + results;
    } else if (dEval === dEvalFumble) {
      results = '!!!Fumble!!!  ' + results;
    }
    this.setState({
      _output: dEval,
      _outputFormula: results,
    });
  }

  //Function Clear
  _clear = () => {
    const resetArr = initialDiceArr.map(row => row.map(column => column));

    this.setState({
      _output: initialOutput,
      _outputFormula: initialFormula,
      _calculateFormula: initialFormula,
      _diceArr: resetArr,
     });
  }

  //Function concatinate output formula
  _concatToOutput = (number) => {
    let fArr = initialDiceArr.map(row => row.map(column => column));
    let counter = 0;
    let outputFormula = '';
    for (let i = 0; i < this.state._diceArr.length; i++) {
      for (let j = 0; j < this.state._diceArr[i].length; j++) {
        fArr[i][j] = this.state._diceArr[i][j];
      }
    }
    //update formula array
    for (let i = 0; i < fArr.length; i++) {
      if (number === fArr[i][0]) {
        fArr[i][1] = fArr[i][1] + 1;
        fArr[i][2] = `${fArr[i][1]}d${fArr[i][0]}`;
      }
    }

    //update output formula
    counter = 0;
    outputFormula = '';
    for (let i = 0; i < fArr.length; i++) {
      if (fArr[i][1] !== 0) {
        if (counter > 0) {
          outputFormula = outputFormula + ' + ';
        }
        outputFormula = outputFormula + fArr[i][2];
        counter++;
        continue;
      } else {
        continue;
      }
    }
    this.setState({
      _outputFormula: `${outputFormula}`,
      _diceArr: fArr.concat(),
    });
  }

  //Function concatinate calculate formula
  _concatToEvaluate = (number) => {
    if (this.state._calculateFormula !== initialFormula) {
      this.setState({
        _calculateFormula: this.state._calculateFormula + '+' + `Math.floor(Math.random() * ${number}) + 1` + '',
      });
    }
    else {
      this.setState({
        _calculateFormula: `Math.floor(Math.random() * ${number}) + 1` + '',
      });
    }
  }

  // render
  render() {
    return (
      <Base color="black" >
        <Keyboard>
          <DiceButton number={10} fontSize={50} onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
          <DiceButton number={12} fontSize={50} onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
          <DiceButton number={20} fontSize={50} onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
          <DiceButton number={100} fontSize={40} onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
        </Keyboard>
        <Keyboard>
          <DiceButton number={4} fontSize={50} onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
          <DiceButton number={6} fontSize={50} onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
          <DiceButton number={8} fontSize={50} onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
          <DiceButton number={'+'} fontSize={50} />
        </Keyboard>
        <CommandLineDisplay formula={this.state._outputFormula} />
        <RollButton onBtnPress={this._handleEvent} onBtnLongPress={this._handleEvent} />
        <Display>
          <DisplayText output={this.state._output} />
          <ResetButton onBtnPress={this._handleEvent} />
        </Display>
      </Base>
    );
  }
}
