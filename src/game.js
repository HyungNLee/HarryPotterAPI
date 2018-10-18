// /* eslint-disable no-unused-vars */
// export class Game {
//   constructor(duelistOne,duelistTwo) {
//     this.keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' ,'s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     this.keyCodeArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88 ,89, 90];
//     // this.health = 5;
//     this.randomKey;
//     this.keyCode;
//     this.currentAction;
//     this.currentActionCancel;
//     this.playerOneAttackText;
//     this.playerOneDodgeText;
//     this.playerOneCommandText;
//     this.playerTwoAttackText;
//     this.playerTwoDodgeText;
//     this.playerTwoCommandText;

//     this.playerOneKeyArray = "qwertasdfgzxcvb".split("");
//     this.playerOneKeyCodeArray = [];
//     newKeyArray.forEach(function(key) {
//       newKeyCodeArray.push(this.keyCodeArray[newKeyArray.indexOf(key)]);
//     });

//     this.playerTwoKeyArray = "yuiophjklnm".split("");
//     this.playerTwoKeyCodeArray = [];
//     newKeyArray.forEach(function(key) {
//       newKeyCodeArray.push(this.keyCodeArray[newKeyArray.indexOf(key)]);
//     });
    
//     this.duelistOne = duelistOne;
//     this.duelistTwo = duelistTwo;

//   }



//   startGame() {
//     this.gameFlow();
//   }

//   getPlayerOneRandomKey() {
//     let randomNumber = Math.floor(Math.random() * this.keyArray.length);
//     this.playerOneRandomKey = this.playerOneKeyArray[randomNumber];
//     this.keyCode = this.playerOneKeyCodeArray[randomNumber];
//   }

//   getPlayerTwoRandomKey() {
//     let randomNumber = Math.floor(Math.random() * this.keyArray.length);
//     this.randomKey = this.playerTwoKeyArray[randomNumber];
//     this.keyCode = this.playerTwoKeyCodeArray[randomNumber];
//   }

//   gameFlow() {
//     this.enemyAttack();
//   }

//   emptyFunction() {
//   }


//   //Player Two Funcitons
//   playerOneDodge() { 
//     // function for player to dodge.
//     clearTimeout(this.currentAction);
//     this.getPlayerOneRandomKey();
//     this.currentActionCancel = this.playerDodgeSuccess;
//     this.playerOneDodgeText = `Press "${this.randomKey}" to dodge!`;
//     this.playerOneCommandText = this.randomKey; 
//     //keydown event
    
//     this.currentAction = setTimeout(() => {
//       this.playerTwoAttack();
//     }, 3000);

//   }

//   playerOneDodgeSuccess() {
//     clearTimeout(this.currentAction);
//     this.keyCode = null;
//     this.randomKey = null;
//     this.currentActionCancel = this.emptyFunction;
//     this.playerOneDodgeText = 'You have successfully dodged!';
//     this.currentAction = setTimeout(() => {
//       this.playerOneAttack();
//     }, 1500);
//   }

//   playerOneAttack() {
//     clearTimeout(this.currentAction);
//     this.getRandomKey();
//     this.playerOneAttackText = `Counterattack! Press "${this.randomKey}" to attack!`;
//     this.playerOneCommandText = this.randomKey; 
//     this.currentActionCancel = this.playerAttackSuccess;
//     this.currentAction = setTimeout(() => {
//       this.playerOneAttackText = "You missed the enemy!";
//       this.playerTwoAttack();
//     }, 3000);
//   }

//   playerOneAttackSuccess() {
//     clearTimeout(this.currentAction);
//     this.keyCode = null;
//     this.randomKey = null;
//     this.currentActionCancel = this.emptyFunction;
//     this.playerOneAttackText = "You hit the enemy!";
//     this.enemyHealth--;
//     this.currentAction = setTimeout(() => {
//       if (this.gameOverChecker()) {
//         this.gameOver();
//       } else {
//         this.playerTwoAttack();
//       }   
//     }, 2000);
//   }

//   //Player Two Funcitons
//   playerTwoDodge() { 
//     // function for player to dodge.
//     clearTimeout(this.currentAction);
//     this.getRandomKey();
//     this.currentActionCancel = this.playerDodgeSuccess;
//     this.playerTwoDodgeText = `Press "${this.randomKey}" to dodge!`;
//     this.playerTwoCommandText = this.randomKey; 
//     //keydown event
    
//     this.currentAction = setTimeout(() => {
//       this.playerOneAttack();
//     }, 3000);

//   }

//   playerTwoDodgeSuccess() {
//     clearTimeout(this.currentAction);
//     this.keyCode = null;
//     this.randomKey = null;
//     this.currentActionCancel = this.emptyFunction;
//     this.playerTwoDodgeText = 'You have successfully dodged!';
//     this.currentAction = setTimeout(() => {
//       this.playerOneAttack();
//     }, 1500);
//   }

//   playerTwoAttack() {
//     clearTimeout(this.currentAction);
//     this.getRandomKey();
//     this.playerTwoAttackText = `Counterattack! Press "${this.randomKey}" to attack!`;
//     this.playerTwoCommandText = this.randomKey;
//     this.currentActionCancel = this.playerAttackSuccess;
//     this.currentAction = setTimeout(() => {
//       this.playerOneText = "You missed the enemy!";
//       this.playerTwoAttack();
//     }, 3000);
//   }

//   playerTwoAttackSuccess() {
//     clearTimeout(this.currentAction);
//     this.keyCode = null;
//     this.randomKey = null;
//     this.currentActionCancel = this.emptyFunction;
//     this.playerTwoAttackText = "You hit the enemy!";
//     this.enemyHealth--;
//     this.currentAction = setTimeout(() => {
//       if (this.gameOverChecker()) {
//         this.gameOver();
//       } else {
//         this.playerTwoAttack();
//       }   
//     }, 2000);
//   }

  



//   // enemyAttack() {
//   //   this.playerOneText = "Enemy is trying to attack you!";
//   //   clearTimeout(this.currentAction);
//   //   this.currentAction = setTimeout(() => {
//   //     this.playerDodge();
//   //   }, 2000);
//   // }

//   // enemyAttackHit() {
//   //   clearTimeout(this.currentAction);
//   //   this.health--;
//   //   this.playerOneText = "You've been hit!";
//   //   this.currentAction = setTimeout(() => {
//   //     if (this.gameOverChecker()) {
//   //       this.gameOver();
//   //     } else {
//   //       this.enemyAttack();
//   //     }   
//   //   }, 2000);
//   // }

//   gameOverChecker() {
//     if (this.enemyHealth < 1 || this.health < 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   gameOver() {
//     if (this.duelistOne.health < 1) {
//       this.playerOneText = "Player 1 Win!";
//     } else if (this.duelistTwo.health < 1) {
//       this.playerOneText = "Player 2 Win!";
//     }
//     setTimeout(() => {
//       location.reload();
//     }, 3000);
//   }
// }