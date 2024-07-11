let buttons = document.querySelectorAll(".btn");
let rstbtn = document.querySelector(".rst");
let newgame = document.querySelector(".newgame");
let winmsg = document.querySelector(".winmsg");

console.log(buttons);

let turn = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function disablebtn() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enablebtn() {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function clrbtn() {
  buttons.forEach((button) => {
    button.innerText = "";
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turn === true) {
      button.innerText = "✓";
      // button.innerText = "○";
      turn = false;
    } else {
      button.innerText = "✕";
      turn = true;
    }
    button.disabled = true;
    checkWinner();
  });
});

function checkWinner() {
  winPatterns.forEach((pattern) => {
    let pos0 = buttons[pattern[0]].innerText;
    let pos1 = buttons[pattern[1]].innerText;
    let pos2 = buttons[pattern[2]].innerText;

    if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
      if (pos0 === pos1 && pos1 === pos2) {
        winmsg.innerText = `${pos0} Wins`;
        disablebtn();
      }
    }
  });
}

rstbtn.addEventListener("click", () => {
  clrbtn();
  enablebtn();
  winmsg.innerText = ``;
});

newgame.addEventListener("click", () => {
  clrbtn();
  enablebtn();
  winmsg.innerText = ``;
});
