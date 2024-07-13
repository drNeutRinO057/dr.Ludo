// Defining Variables and Parameters...................................................................
const selectbox = document.querySelector(`.selectbox`);
const options = document.querySelectorAll(`.radio-group input[name="options"]`);
const modesound = document.querySelector(`.modesound`);
const tickboxes = document.querySelectorAll(`.tickbox input[type="checkbox"]`);
const tickboxsound = document.querySelector(`.tickboxsound`);
const errorsound = document.querySelector(`.errorsound`);
const msg = document.querySelector(`.msg`);
const tockens = document.querySelectorAll(`.tocken`);
const playerNames = document.querySelectorAll(`.tickbox input[type="text"]`);
const Placeholders = document.querySelectorAll(`.pInput`);
const hr = document.querySelector(`hr`)

const Tockens1 = document.querySelectorAll(".tocken1");
const Tockens2 = document.querySelectorAll(".tocken2");
const Tockens3 = document.querySelectorAll(".tocken3");
const Tockens4 = document.querySelectorAll(".tocken4");

const playerA = document.querySelector(`.boxA p`);
const playerB = document.querySelector(`.boxB p`);
const playerC = document.querySelector(`.boxC p`);
const playerD = document.querySelector(`.boxD p`);

const button = document.querySelector(`.start`);
const startsound = document.querySelector(`.startsound`);

const dieboxes = document.querySelectorAll(".theDice");

const p1tickbox = tickboxes[0];
const p2tickbox = tickboxes[1];
const p3tickbox = tickboxes[2];
const p4tickbox = tickboxes[3];

const p1Name = playerNames[0];
const p2Name = playerNames[1];
const p3Name = playerNames[2];
const p4Name = playerNames[3];

const p1Placeholder = Placeholders[0];
const p2Placeholder = Placeholders[1];
const p3Placeholder = Placeholders[2];
const p4Placeholder = Placeholders[3];

const die1 = dieboxes[0];
const die2 = dieboxes[1];
const die3 = dieboxes[2];
const die4 = dieboxes[3];

const Selectedcolours21 = "Blue,Green";
// let Selectedcolours22 = "Blue,Red";
// let Selectedcolours23 = "Blue,Yellow";
// let Selectedcolours24 = "Green,Red";
// let Selectedcolours25 = "Green,Yellow";
const Selectedcolours26 = "Red,Yellow";
const Selectedcolours31 = "Blue,Green,Red";
const Selectedcolours32 = "Green,Red,Yellow";
const Selectedcolours33 = "Blue,Green,Yellow";
const Selectedcolours34 = "Blue,Red,Yellow";
const Selectedcolours41 = "Blue,Green,Red,Yellow";

let player1 = ``;
let player2 = ``;
let player3 = ``;
let player4 = ``;

const ColourCombination = {
  twoPlayers: {
    RY: 1,
    RB: 2,
    RG: 3,
    YB: 4,
    YG: 5,
    BG: 6,
  },
};

let maxPlayer = 0;
let allowPlayer = 0;
let colours = [];
let colourIndx;
let coloursString;
let count = 1;





// Main Execution......................................................................................

window.onload = () => {
  HideDice();
  DisableButtons();
  HideTockens();
};

SelectPlayer();
CheckboxSelection();
StartButton();


// Debugging...........................................................................................

// console.log(tickboxes);
// console.log(option2.value);
// console.log(option3.value);
// console.log(p1Name);
// console.log(p2Name);
// console.log(p3Name);
// console.log(p4Name);
// console.log(p1tickbox);
// console.log(p1Placeholder);
// console.log(tickboxes[0].className);
// console.log(playerA);
// console.log(playerB);
// console.log(playerC);
// console.log(playerD);
// console.log(playerNames);
// console.log(ColourCombination.twoPlayers.RY);





// Defining Functions..................................................................................

function HideDice() {
  dieboxes.forEach(diebox => {
    diebox.classList.add("hide");
  });
}

function UncheckBoxes() {
  tickboxes.forEach((tickbox) => {
    maxPlayer = 0;
    tickbox.checked = false;
  });
}

function DisableButtons() {
  playerNames.forEach((playerName) => {
    playerName.disabled = true;
  });
}

function EnableCheckboxes() {
  tickboxes.forEach((tickbox) => {
    tickbox.disabled = false
  })
}

function EnableInput() {
  switch (tickboxClass) {
    case "Red":
      p1Name.disabled = false;

      break;
    case "Yellow":
      p2Name.disabled = false;

      break;
    case "Blue":
      p3Name.disabled = false;

      break;
    case "Green":
      p4Name.disabled = false;

      break;

    default:
      break;
  }
}

function DisableInput() {
  switch (tickboxClass) {
    case "Red":
      p1Name.disabled = true;

      break;
    case "Yellow":
      p2Name.disabled = true;

      break;
    case "Blue":
      p3Name.disabled = true;

      break;
    case "Green":
      p4Name.disabled = true;

      break;

    default:
      break;
  }
}

function DisableAllInputs() {
  playerNames.forEach((playerName) => {
    playerName.disabled = true;
  });
}

function ResetPlaceholders() {
  Placeholders.forEach((Placeholder) => {
    Placeholder.value = "";
    Placeholder.placeholder = "Player";
  });
}

function ResetSpecificPlaceholder() {
  if (tickboxClass === "Red") {
    p1Placeholder.value = ``;
    p1Placeholder.placeholder = `Player`;
  }
  else if (tickboxClass === "Yellow") {
    p2Placeholder.placeholder = `Player`;
    p2Placeholder.value = ``;
  }
  else if (tickboxClass === "Blue") {
    p3Placeholder.value = ``;
    p3Placeholder.placeholder = `Player`;
  }
  else if (tickboxClass === "Green") {
    p4Placeholder.value = ``;
    p4Placeholder.placeholder = `Player`;
  }
}

function ClearColours() {
  // colours.forEach((color) => {
  //   colours.pop(color);
  // })
  colours.length = 0;
}

function SelectPlayer() {
  options.forEach((option) => {
    option.addEventListener("click", () => {
      UncheckBoxes();
      allowPlayer = option.value;
      allowPlayer = Number(allowPlayer);
      if (option.checked === true) {
        EnableCheckboxes();
        DisableAllInputs();
        ResetPlaceholders();
        ClearColours();
        modesound.play();
        // console.log(`Allowed Players: ${allowPlayer}`);
        msg.innerText = ``;
        if (allowPlayer === 2) {
          hr.classList.remove(`hide`);
        } else {
          hr.classList.add(`hide`);
        }
      }
    });
  });
  return allowPlayer;
}

function CheckboxSelection() {
  tickboxes.forEach((tickbox) => {
    tickbox.addEventListener("change", () => {
      // console.log(tickbox);

      if (tickbox.checked === true) {
        tickboxsound.play();
        maxPlayer += 1;
        tickboxClass = tickbox.className;
        EnableInput(tickboxClass);
        colours.push(tickboxClass);
        if (allowPlayer === 2) {
          if (tickboxClass === "Red" || tickboxClass === "Yellow") {
            p3tickbox.disabled = true;
            p4tickbox.disabled = true;
          }
          else if (tickboxClass === "Blue" || tickboxClass === "Green") {
            p1tickbox.disabled = true;
            p2tickbox.disabled = true;
          }
        }

      } else if (tickbox.checked === false) {
        tickboxsound.play();
        maxPlayer -= 1;
        tickboxClass = tickbox.className;
        DisableInput(tickboxClass);
        ResetSpecificPlaceholder();
        msg.innerText = ``;
        colourIndx = colours.indexOf(tickboxClass)
        colours.splice(colourIndx, 1);


        if (allowPlayer === 2 && maxPlayer === 0) {
          EnableCheckboxes()
        }
      }
      if (maxPlayer > allowPlayer) {
        tickboxsound.pause();
        errorsound.play();
        tickbox.checked = false;
        maxPlayer -= 1;
        tickboxClass = tickbox.className;
        DisableInput(tickboxClass);
        colourIndx = colours.indexOf(tickboxClass)
        colours.splice(colourIndx, 1);
        msg.innerText = `You can't select more than ${allowPlayer} players!`;
      }
      if (allowPlayer === 0) {
        msg.innerText = `Please select number of players!`;
      }
      if (allowPlayer > 0 && maxPlayer < allowPlayer) {
      }
      SetPlaceholders(tickbox);
      colours.sort();

      console.log(`Checked: ${tickbox.checked}`);
      console.log(`Selected: ${maxPlayer}`);
      console.log(`Allowed: ${allowPlayer}`);
      console.log(`Colours: ${colours}`);
    });
  });
}

function SetPlaceholders(tickbox) {
  if (tickbox.checked === true) {
    console.log(tickboxClass);
    let Placeholder = document.querySelector(`.${tickboxClass}Input`);
    Placeholder.placeholder = `Player${maxPlayer}`;
  } else if (tickbox.checked === false) {
    // console.log(tickboxClass);
    let Placeholder = document.querySelector(`.${tickboxClass}Input`);
    Placeholder.placeholder = "Player";
  }
}

function getSelectedRadioValue(radioName) {
  // const selectedRadio1 = document.querySelector(`input[name="${radioName}"]:checked`);
  // return selectedRadio ? selectedRadio.value : null;
}

function StartButton() {
  button.addEventListener("click", () => {
    tickboxes.forEach((tickbox) => {
      tickbox.className;
      if (
        allowPlayer > 0 &&
        maxPlayer === allowPlayer &&
        tickbox.checked === true
      ) {
        // console.log(tickbox.className);
        startsound.play();
        msg.innerText = `Ready...`;
        setTimeout(() => {
          if (window.innerWidth > window.innerHeight) {
            selectbox.style.transform = `translateX(-20vw)`;
          } else {
            selectbox.style.transform = `translateY(-25vw)`;
          }
          selectbox.classList.add(`hide`);
        }, 500);
      } else if (allowPlayer === 0) {
        msg.innerText = `Please select number of players!`;
        errorsound.play();
      } else if (maxPlayer != allowPlayer) {
        msg.innerText = `Please select ${allowPlayer} tockens`;
        errorsound.play();
      }
    });
    if (msg.innerText === `Ready...`) {
      StartGame();
    }
    console.log(msg.innerText);
    console.log(colours);
  });
}

function HideTockens() {
  tockens.forEach((tocken) => {
    tocken.classList.add(`hide`);
    // console.log(tocken);
  });
}

// function CheckColour() { }

function DisplayNames(coloursString) {
  switch (coloursString) {
    // console.log(p3Placeholder.placeholder);
    // player3 = p3Name;

    case Selectedcolours21:
      p3Name.value ? player3 = p3Name.value : player3 = p3Placeholder.placeholder;
      p4Name.value ? player4 = p4Name.value : player4 = p4Placeholder.placeholder;
      playerC.innerHTML = player3;
      playerB.innerHTML = player4;
      playerA.innerHTML = ``;
      playerD.innerHTML = ``;
      break;

    case Selectedcolours26:
      p1Name.value ? player1 = p1Name.value : player1 = p1Placeholder.placeholder;
      p2Name.value ? player2 = p2Name.value : player2 = p2Placeholder.placeholder;
      playerA.innerHTML = player1;
      playerD.innerHTML = player2;
      playerC.innerHTML = ``;
      playerB.innerHTML = ``;
      break;

    case Selectedcolours31:
      p3Name.value ? player3 = p3Name.value : player3 = p3Placeholder.placeholder;
      p4Name.value ? player4 = p4Name.value : player4 = p4Placeholder.placeholder;
      p1Name.value ? player1 = p1Name.value : player1 = p1Placeholder.placeholder;
      playerC.innerHTML = player3;
      playerB.innerHTML = player4;
      playerA.innerHTML = player1;
      playerD.innerHTML = ``;
      break;

    case Selectedcolours32:
      p4Name.value ? player4 = p4Name.value : player4 = p4Placeholder.placeholder;
      p1Name.value ? player1 = p1Name.value : player1 = p1Placeholder.placeholder;
      p2Name.value ? player2 = p2Name.value : player2 = p2Placeholder.placeholder;
      playerB.innerHTML = player4;
      playerA.innerHTML = player1;
      playerD.innerHTML = player2;
      playerC.innerHTML = ``;
      break;

    case Selectedcolours33:
      p3Name.value ? player3 = p3Name.value : player3 = p3Placeholder.placeholder;
      p2Name.value ? player2 = p2Name.value : player2 = p2Placeholder.placeholder;
      p4Name.value ? player4 = p4Name.value : player4 = p4Placeholder.placeholder;
      playerC.innerHTML = player3;
      playerB.innerHTML = player2;
      playerD.innerHTML = player4;
      playerA.innerHTML = ``;
      break;

    case Selectedcolours34:
      p3Name.value ? player3 = p3Name.value : player3 = p3Placeholder.placeholder;
      p1Name.value ? player1 = p1Name.value : player1 = p1Placeholder.placeholder;
      p2Name.value ? player2 = p2Name.value : player2 = p2Placeholder.placeholder;
      playerC.innerHTML = player3;
      playerA.innerHTML = player1;
      playerD.innerHTML = player2;
      playerB.innerHTML = ``;
      break;

    case Selectedcolours41:
      p3Name.value ? player3 = p3Name.value : player3 = p3Placeholder.placeholder;
      p4Name.value ? player4 = p4Name.value : player4 = p4Placeholder.placeholder;
      p1Name.value ? player1 = p1Name.value : player1 = p1Placeholder.placeholder;
      p2Name.value ? player2 = p2Name.value : player2 = p2Placeholder.placeholder;
      playerC.innerHTML = player3;
      playerB.innerHTML = player4;
      playerA.innerHTML = player1;
      playerD.innerHTML = player2;
      break;

    default:
      break;
  }
}

function ShowTockens(coloursString) {
  console.log("ShowTockens");

  switch (coloursString) {
    case Selectedcolours21:
      // Blue-Green
      console.log("21 Selected");
      Tockens3.forEach(Tocken3 => {
        Tocken3.classList.remove("hide");
      });
      Tockens2.forEach(Tocken2 => {
        Tocken2.classList.remove("hide");
      });

      die3.classList.remove(`hide`);
      die2.classList.remove(`hide`);
      TwoPlayerGame(Selectedcolours21)

      break;

    // case Selectedcolours22:
    //   Tockens3.forEach(Tocken3 => {
    //     Tocken3.classList.remove("hide");
    //   });
    //   Tockens1.forEach(Tocken1 => {
    //     Tocken1.classList.remove("hide");
    //   });

    //   break;

    // case Selectedcolours23:
    //   Tockens3.forEach(Tocken3 => {
    //     Tocken3.classList.remove("hide");
    //   });
    //   Tockens4.forEach(Tocken4 => {
    //     Tocken4.classList.remove("hide");
    //   });

    //   break;

    // case Selectedcolours24:
    //   Tockens2.forEach(Tocken2 => {
    //     Tocken2.classList.remove("hide");
    //   });
    //   Tockens1.forEach(Tocken1 => {
    //     Tocken1.classList.remove("hide");
    //   });

    //   break;

    // case Selectedcolours25:
    //   Tockens2.forEach(Tocken2 => {
    //     Tocken2.classList.remove("hide");
    //   });
    //   Tockens1.forEach(Tocken1 => {
    //     Tocken1.classList.remove("hide");
    //   });

    //   break;

    case Selectedcolours26:
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });
      Tockens4.forEach(Tocken4 => {
        Tocken4.classList.remove("hide");
      });

      die1.classList.remove(`hide`);
      die4.classList.remove(`hide`);
      TwoPlayerGame(Selectedcolours26);

      break;

    case Selectedcolours31:
      Tockens3.forEach(Tocken3 => {
        Tocken3.classList.remove("hide");
      });
      Tockens2.forEach(Tocken2 => {
        Tocken2.classList.remove("hide");
      });
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });

      die3.classList.remove(`hide`);
      die2.classList.remove(`hide`);
      die1.classList.remove(`hide`);

      break;

    case Selectedcolours32:
      Tockens2.forEach(Tocken2 => {
        Tocken2.classList.remove("hide");
      });
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });
      Tockens4.forEach(Tocken4 => {
        Tocken4.classList.remove("hide");
      });

      die2.classList.remove(`hide`);
      die1.classList.remove(`hide`);
      die4.classList.remove(`hide`);

      break;

    case Selectedcolours33:
      Tockens3.forEach(Tocken3 => {
        Tocken3.classList.remove("hide");
      });
      Tockens2.forEach(Tocken2 => {
        Tocken2.classList.remove("hide");
      });
      Tockens4.forEach(Tocken4 => {
        Tocken4.classList.remove("hide");
      });

      die3.classList.remove(`hide`);
      die2.classList.remove(`hide`);
      die4.classList.remove(`hide`);

      break;

    case Selectedcolours34:
      Tockens3.forEach(Tocken3 => {
        Tocken3.classList.remove("hide");
      });
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });
      Tockens4.forEach(Tocken4 => {
        Tocken4.classList.remove("hide");
      });

      die3.classList.remove(`hide`);
      die1.classList.remove(`hide`);
      die4.classList.remove(`hide`);

      break;

    case Selectedcolours41:
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });
      Tockens2.forEach(Tocken2 => {
        Tocken2.classList.remove("hide");
      });
      Tockens3.forEach(Tocken3 => {
        Tocken3.classList.remove("hide");
      });
      Tockens4.forEach(Tocken4 => {
        Tocken4.classList.remove("hide");
      });

      die3.classList.remove(`hide`);
      die2.classList.remove(`hide`);
      die1.classList.remove(`hide`);
      die4.classList.remove(`hide`);

      break;

    default:
      break;
  }
}

// function ShowDice() { }

function StartGame() {
  coloursString = colours.toString();
  // console.log(colours);

  DisplayNames(coloursString);
  ShowTockens(coloursString);
}

function TwoPlayerGame(coloursString) { }

function ThreePlayerGame(coloursString) { }

function FourPlayerGame(coloursString) { }



//changes on 12/07/202 at 07:56 PM
