/* eslint-disable no-unused-vars */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Game} from '../src/game.js';
import {Duelist, Characters} from '../src/harryPotter';

const Promise = require('es6-promise').Promise;



$(document).ready(function() {

  let playerOne = new Duelist("Harry Potter");
  let playerTwo = new Duelist("Draco Malfoy");


  $("#playerOneName").text(playerOne.name); 
  $("#playerTwoName").text(playerTwo.name); 


  playerOne.attackKeyCode = 66;
  playerTwo.attackKeyCode = 78;

  playerTwo.dodgeKeyCodes = [81, 87, 69, 82, 84];
  //qwertb
  playerOne.dodgeKeyCodes = [89, 85, 73, 79, 80];
  //yuiop

  playerOne.dodgeInterval();
  playerTwo.dodgeInterval();


  // let newGame = new Game();
  // newGame.startGame();

  let text = setInterval(() => {
    $("#playerOneHealth").text(`HP: ${playerOne.currentHealth}`); 
    $("#playerTwoHealth").text(`HP: ${playerTwo.currentHealth}`); 
    // $("#playerOneAttackText").text(newGame.playerOneAttackText);
    // $("#playerOneAttackText").text(newGame.currentText);
    $("#playerOneDodgeList").text(`Dodge Keys: ${playerOne.getList()}`); 
    $("#playerTwoDodgeList").text(`Dodge Keys: ${playerTwo.getList()}`); 
  }, 50);


  document.addEventListener("keydown", keyDownHandler, false);

  function keyDownHandler(e) {
    let playerOneSideArray = "qwertasdfgzxcvb".split("");
    let keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' ,'s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let keyCodeArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88 ,89, 90];
    let playerOneSide = [];
    playerOneSideArray.forEach(function(key){
      playerOneSide.push(keyCodeArray[keyArray.indexOf(key)]);
    });
    
    $("#userText").text(e.key);
    if (e.keyCode == playerOne.attackKeyCode) {
      playerOne.attack(playerTwo);
    } else if (e.keyCode == playerTwo.attackKeyCode) {
      playerTwo.attack(playerOne);
    } else if (e.keyCode == playerOne.dodgeQueue[0]) {
      playerOne.dodgeSuccess();
    } else if (e.keyCode == playerTwo.dodgeQueue[0]) {
      playerTwo.dodgeSuccess();
    } else if (playerOneSide.includes(e.keyCode)) {
      console.log("wrong!11");
      playerOne.currentHealth -= 5;
    } else {
      console.log("wrong!22");
      playerTwo.currentHealth -= 5;
    }
  }
});