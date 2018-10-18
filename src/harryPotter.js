const key = "$2a$10$vG7vesT1lBlljKpzlGRu2euJ7nfcuq/BJr6WtAvlGbxMa2ojexTxe";

/* eslint-disable no-unused-vars */
var Promise = require('es6-promise').Promise;

export class Duelist {
  constructor(name) {
    this.name = name;
    this.currentHealth = 100;
    this.maxHealth = 100;
    this.dead = false;
    this.spellList = [
      {
        name: "Expelliarmus"
      },
      {
        name: "Stupefy",
      }
    ];
    this.dodgeQueue = [];
    this.dodgeKeyCodes = [];
    this.dodgeIntervalVariable;
    this.attackKeyCode = 56
  }

  attack(otherDuelist) {
    let random = Math.floor(Math.random() * 2);
    let name = this.spellList[random].name;
    // Get random key from dodgeKeyCodes
    let randomNumber = Math.floor(Math.random() * this.dodgeKeyCodes.length);
    let randomKey = this.dodgeKeyCodes[randomNumber];
    otherDuelist.dodgeQueue.push(randomKey);
    // return `${this.name} casts ${name} and does ${damage} damage!`;
  }

  takeDamage(damage) {
    this.currentHealth -= damage;
    if (this.currentHealth < 0) {
      this.currentHealth = 0;
      this.dead = true;
    }
  }

  dodgeChance() {
    this.dodgeQueue.shift();
    let damage = Math.ceil(Math.random() + 2);
    this.takeDamage(damage);
    // return `${this.name} takes ${damage} damage`;
  }

  dodgeSuccess() {
    this.dodgeQueue.shift();
    this.clearDodgeInterval();
    this.dodgeInterval();
    // return `${this.name} dodged successfully!`;
  }

  dodgeInterval() {
    this.dodgeIntervalnVariable = setInterval(() => {
      if (this.dodgeQueue.length > 0) {
        this.dodgeChance();
      }
    }, 1500);
  }

  clearDodgeInterval() {
    clearInterval(this.dodgeIntervalVariable);
  }

  getList() {
    let keyArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' ,'s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let keyCodeArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88 ,89, 90];

    let listString = "";
    let listKey = "";
    if (this.dodgeQueue.length > 5) {
      let sliced =  this.dodgeQueue.slice(0.4);
      // listString = sliced.join(", ");
      sliced.forEach(function(key){
        listKey += keyArray[keyCodeArray.indexOf(key)];
      });
    } else {
      // listString = this.dodgeQueue.join(", ");
      this.dodgeQueue.forEach(function(key){
        listKey += keyArray[keyCodeArray.indexOf(key)];
      });
    }
    return listKey;
  }
  

}

export class Characters {

  searchCharacterByName(name) {
    return new Promise (function(resolve,reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.potterapi.com/v1/characters?${key}&${name}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  searchCharacterByHouse(house) {
    return new Promise (function(resolve,reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.potterapi.com/v1/characters?${key}&${house}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  searchCharacterByDeathEater(deathEater) {
    return new Promise (function(resolve,reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.potterapi.com/v1/characters?${key}&${deathEater}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  searchCharacterByDumArmy(dumbledoresArmy) {
    return new Promise (function(resolve,reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.potterapi.com/v1/characters?${key}&${dumbledoresArmy}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  searchSpellsByName() {
    return new Promise (function(resolve,reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.potterapi.com/v1/spells?${key}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}