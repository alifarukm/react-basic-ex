import React, {Component} from 'react';
import Tree from './components/Tree/Tree';
import Apple from './components/Apple/Apple';
import Basket from './components/Basket/Basket';
import Button from './components/Button/Button';
import {shake} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';
import $ from 'jquery';
import './App.css';

//Tree Default and shake animation styles
const styles = StyleSheet.create({
  headShake: {
    animationName: shake,
    animationDuration: '1s',
    animationIterationCount: '3',
    width: '40%',
    height: '40%',
    margin: 'auto',
    cursor: 'pointer',
  },
  defaultStyle: {
    width: '40%',
    height: '40%',
    margin: 'auto',
    cursor: 'pointer',
  },
});
class App extends Component {
  state = {
    tree: 'mainTree',
    applePos: [
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
      {x: 0, y: 0},
    ],
    lockShake: false,
    lockDrop: false,
    lockCollect: false,
  };

  componentDidMount() {
    // Get tree position
    const mTree = document.querySelector('#tree>svg');
    const mTreeTop = $(mTree).position().top;
    const mTreeLeft = $(mTree).position().left;
    console.log(mTreeLeft);
    // Set apple positions on tree
    this.setState({
      applePos: [
        {x: mTreeTop + 120, y: mTreeLeft + 950},
        {x: mTreeTop + 70, y: mTreeLeft + 900},
        {x: mTreeTop + 230, y: mTreeLeft + 850},
        {x: mTreeTop + 350, y: mTreeLeft + 700},
        {x: mTreeTop + 250, y: mTreeLeft + 1050},
        {x: mTreeTop + 360, y: mTreeLeft + 1100},
        {x: mTreeTop + 180, y: mTreeLeft + 740},
        {x: mTreeTop + 310, y: mTreeLeft + 900},
        {x: mTreeTop + 300, y: mTreeLeft + 800},
        {x: mTreeTop + 150, y: mTreeLeft + 1070},
        {x: mTreeTop + 220, y: mTreeLeft + 970},
      ],
    });
  }

  createApples = () => {
    let apples = [];
    for (let i = 0; i < this.state.applePos.length; i++) {
      apples.push(
        <Apple
          style={{
            top: this.state.applePos[i].x + 'px',
            left: this.state.applePos[i].y + 'px',
          }}
          key={i}
        />
      );
    }
    return apples;
  };

  shakeTree = () => {
    // This random number to find the number of falling apples.[min 1 max 11]
    let numApple = Math.floor(Math.random() * 11) + 1;
    this.setState({shouldShake: true}, () => {
      const self = this;
      setTimeout(() => self.setState({shouldShake: true}), 3000);
    });

    let droppedApple = [];

    setTimeout(() => {
      for (let i = 0; i < numApple; i++) {
        let downApple = this.getAppleRandom();
        droppedApple.push(downApple);
        this.downAppleFoo(downApple);
      }
    }, 3000);

    setTimeout(() => {
      for (let i = 0; i < numApple; i++) {
        this.collectAppleFoo(droppedApple[i]);
      }
    }, 3000);
  };

  // This function return random apple
  getAppleRandom = () => {
    let apple = document.getElementsByClassName('Apple');
    return apple[Math.floor(Math.random() * 12) + 0];
  };

  // This function drop down apple
  downAppleFoo = downApple => {
    $(downApple).animate(
      {
        top: '700px',
      },
      'slow'
    );
  };

  // This function collect all apples to basket
  collectAppleFoo = downApple => {
    $(downApple).animate(
      {
        left: '1080px',
        top: '685px',
      },
      'slow'
    );
  };

  render() {
    return (
      <div className="App">
        {this.createApples()}
        <Tree
          className={
            this.state.shouldShake
              ? css(styles.headShake)
              : css(styles.defaultStyle)
          }
          onClick={this.shakeTree}
        />
        <Basket />
        <Button />
      </div>
    );
  }
}

export default App;
