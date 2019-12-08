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
import { StyleSheet } from 'react-native';

//Custom Components
import Base from './components/Base.js';
import Keyboard from './components/Keyboard.js';
import DiceButton from './components/DiceButton.js';
import CommandLineDisplay from './components/CommandLineDisplay.js';
import Display from './components/Display.js';
import DisplayText from './components/DisplayText.js';
import RollButton from './components/RollButton.js';
import ResetButton from './components/ResetButton.js';

//Global constants
const initialOutput = '0';
const initialFormula = '';
const initialRollList = [4, 6, 8, 10, 12, 20, 100];
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

  //Variables and initializations
  constructor(props) {
    super(props);
    this.state = {
      _output: initialOutput, //Inputted dice or Result of roll
      _outputFormula: initialFormula, //Inputted dices or Result of each roll
      _calculateFormula: initialFormula, //Formula for Calculate
      _diceArr: [], //Dices, roll numbers and its string
    };
    this._handleEvent = this._handleEvent.bind(this);
  }

  /******************** On push Roll or Reset ********************/
  //Function roll Dice
  _rollDice = () => {
    //initializations
    let rollResult = 0;
    let dEval = 0;
    let dEvalCritical = 0;
    let dEvalFumble = 0;
    let resultString = '';

    //operate
    for (let i = 0; i < this.state._diceArr.length; i++) {
      for (let j = 0; j < this.state._diceArr[i][1]; j++) {
        rollResult = Math.floor(Math.random() * this.state._diceArr[i][0]) + 1;
        dEval = dEval + rollResult;
        dEvalCritical = dEvalCritical + this.state._diceArr[i][0];
        dEvalFumble = dEvalFumble + 1;
        if (i === 0) {
          resultString = 'd' + this.state._diceArr[i][0] + '[' + rollResult + ']';
          continue;
        } else if (i > 0) {
          resultString = resultString + ' + d' + this.state._diceArr[i][0] + '[' + rollResult + ']';
          continue;
        }
      }
    }
    if (dEval === dEvalCritical) {
      resultString = '!!!CRITICAL!!!  ' + resultString;
    } else if (dEval === dEvalFumble) {
      resultString = '!!!Fumble!!!  ' + resultString;
    }
    this.setState({
      _output: dEval,
      _outputFormula: resultString,
    });
  }

  //Function Clear
  _clear = () => {
    this.setState({
      _rollArr: initialRollList.concat(), //???
      _output: initialOutput, //Main display inputted dice or result of roll
      _outputFormula: initialFormula, //Sub display inputted dice or result of each dice roll
      _calculateFormula: initialFormula,
      _diceArr: initialDiceArr.concat(),
     });
  }

  /******************** On Push Dice Button ********************/
  //Function handles action
  _handleEvent = (pushedDiceNumberSet) => {
    this.setState({
      _output: `+ d${pushedDiceNumberSet[0]}`,
    });
    this._concatToOutput(pushedDiceNumberSet[0]);
    this._concatToEvaluate(pushedDiceNumberSet[0]);
  }

  //Function concatinate output formula
  _concatToOutput = (pushedDiceNumber) => {
    //initialize tempolary fArr
    let fArr = initialDiceArr.map(row => row.map(column => column));
    for (let i = 0; i < this.state._diceArr.length; i++) {
      fArr[i][0] = this.state._diceArr[i][0]; //dice number
      fArr[i][1] = this.state._diceArr[i][1]; //how many roll?
      fArr[i][2] = this.state._diceArr[i][2]; //string like "3d6"
    }

    //updata fArr
    for (let i = 0; i < fArr.length; i++) {
      if (pushedDiceNumber === fArr[i][0]) {
        fArr[i][1] = fArr[i][1] + 1;
        fArr[i][2] = `${fArr[i][1]}d${fArr[i][0]}`;
      }
    }

    //update output formula
    let counter = 0;
    let outputFormula = '';
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

    //set state
    this.setState({
      _outputFormula: `${outputFormula}`,
      _diceArr: fArr.concat(),
    });
  }

  //Function concatinate calculate formula
  _concatToEvaluate = (pushedDiceNumber) => {
    if (this.state._calculateFormula !== initialFormula) {
      this.setState({
        _calculateFormula: this.state._calculateFormula + '+' + `Math.floor(Math.random() * ${pushedDiceNumber}) + 1` + '',
      });
    }
    else {
      this.setState({
        _calculateFormula: `Math.floor(Math.random() * ${pushedDiceNumber}) + 1` + '',
      });
    }
  }

  /******************** Render ********************/
  // render
  render() {
    return (
      <Base>
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
        <CommandLineDisplay formula={this.state._outputFormula} diceArr={this.state._diceArr}/>
        <RollButton onBtnPress={this._rollDice} />
        <Display>
          <DisplayText output={this.state._output} />
          <ResetButton onBtnPress={this._clear} />
        </Display>
      </Base>
    );
  }
}
