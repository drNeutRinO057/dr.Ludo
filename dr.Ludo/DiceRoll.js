// script.js

let randomX = 0;
let randomY = 0;
let randomZ = 0;
let outcome;

const faces = document.querySelectorAll(".face");
const dice = document.querySelectorAll(".cube");

function rollDice() {
  randomX = Math.floor(Math.random() * 4) * 90;
  randomY = Math.floor(Math.random() * 4) * 90;
  randomZ = Math.floor(Math.random() * 4) * 90;
  dice.forEach(die => {
      die.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;
  });
}

function DiceClick() {
  faces.forEach((element) => {
      rollDice();
      OutCome();
      // let faceVal = element.innerHTML;
  });
}

function OutCome() {
  let index = `${randomX / 90},${randomY / 90},${randomZ / 90}`;
  outcome = mapping[index];
  // if (outcome) {

  // }
  // console.log(index);
  // console.log(`${outcome}   (${index})`);
  // return outcome;
}

const mapping = {
  "0,0,0": 1,
  "0,0,2": 1,
  "0,0,1": 1,
  "0,0,3": 1,
  "0,1,0": 2,
  "0,1,1": 4,
  "0,1,2": 5,
  "0,1,3": 3,
  "0,2,0": 6,
  "0,2,1": 6,
  "0,2,2": 6,
  "0,2,3": 6,
  "0,3,0": 5,
  "0,3,1": 2,
  "0,3,2": 2,
  "0,3,3": 4,
  "1,0,0": 4,
  "1,0,1": 5,
  "1,0,2": 3,
  "1,0,3": 2,
  "1,1,0": 4,
  "1,1,1": 5,
  "1,1,2": 3,
  "1,1,3": 2,
  "1,2,0": 4,
  "1,2,1": 5,
  "1,2,2": 3,
  "1,2,3": 2,
  "1,3,0": 4,
  "1,3,1": 5,
  "1,3,2": 3,
  "1,3,3": 2,
  "2,0,0": 6,
  "2,0,1": 6,
  "2,0,2": 6,
  "2,0,3": 6,
  "2,1,0": 5,
  "2,1,1": 3,
  "2,1,2": 2,
  "2,1,3": 4,
  "2,2,0": 1,
  "2,2,1": 1,
  "2,2,2": 1,
  "2,2,3": 1,
  "2,3,0": 2,
  "2,3,1": 4,
  "2,3,2": 5,
  "2,3,3": 3,
  "3,0,0": 3,
  "3,0,1": 2,
  "3,0,2": 4,
  "3,0,3": 5,
  "3,1,0": 3,
  "3,1,1": 2,
  "3,1,2": 4,
  "3,1,3": 5,
  "3,2,0": 3,
  "3,2,1": 2,
  "3,2,2": 4,
  "3,2,3": 5,
  "3,3,0": 3,
  "3,3,1": 2,
  "3,3,2": 4,
  "3,3,3": 5,
};
