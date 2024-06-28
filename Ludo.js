const selectbox = document.querySelector(`.selectbox`);
const options = document.querySelectorAll(`.radio-group input[name="options"]`);
const tickboxes = document.querySelectorAll(`.tickbox input[type="checkbox"]`);
const msg = document.querySelector(`.msg`);
const tockens = document.querySelectorAll(`.tocken`);
const playerNames = document.querySelectorAll(`.tickbox input[type="text"]`);
const Placeholders = document.querySelectorAll(`.pInput`);
const Tockens1 = document.querySelectorAll(".tocken1");
const Tockens2 = document.querySelectorAll(".tocken2");
const Tockens3 = document.querySelectorAll(".tocken3");
const Tockens4 = document.querySelectorAll(".tocken4");

const p1Name = playerNames[0];
const p2Name = playerNames[1];
const p3Name = playerNames[2];
const p4Name = playerNames[3];

const playerA = document.querySelector(`.boxA p`);
const playerB = document.querySelector(`.boxB p`);
const playerC = document.querySelector(`.boxC p`);
const playerD = document.querySelector(`.boxD p`);

const button = document.querySelector(`.start`);

let dieboxes = document.querySelectorAll(".theDice");

let maxPlayer = 0;
let allowPlayer = 0;
let colours = [];
let colourIndx;

window.onload = () => {
  HideDice();
  DisableButtons();
  HideTockens();
};

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

SelectPlayer();
CheckboxSelection();
StartButton();

// Debugging...........................
//.....................................
// console.log(tickboxes);
// console.log(option2.value);
// console.log(option3.value);
// console.log(p1Name);
// console.log(p2Name);
// console.log(p3Name);
// console.log(p4Name);
// console.log(tickboxes[0].className);
// console.log(playerA);
// console.log(playerB);
// console.log(playerC);
// console.log(playerD);
// console.log(playerNames);
// console.log(ColourCombination.twoPlayers.RY);

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
        DisableAllInputs();
        ResetPlaceholders();
        ClearColours();
        // console.log(`Allowed Players: ${allowPlayer}`);
        msg.innerText = ``;
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
        maxPlayer += 1;
        tickboxClass = tickbox.className;
        EnableInput(tickboxClass);
        colours.push(tickboxClass);
      } else if (tickbox.checked === false) {
        maxPlayer -= 1;
        tickboxClass = tickbox.className;
        DisableInput(tickboxClass);
        msg.innerText = ``;
        colourIndx = colours.indexOf(tickboxClass)
        colours.splice(colourIndx, 1);
      }
      if (maxPlayer > allowPlayer) {
        tickbox.checked = false;
        maxPlayer -= 1;
        tickboxClass = tickbox.className;
        DisableInput(tickboxClass);
        colourIndx = colours.indexOf(tickboxClass)
        colours.splice(colourIndx, 1);
        msg.innerText = `You can't select more than ${allowPlayer} players`;
      }
      if (allowPlayer === 0) {
        msg.innerText = `Please select number of players`;
      }
      SetPlaceholders(tickbox);

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
        msg.innerText = `Ready...`;
        selectbox.classList.add(`hide`);
      } else if (allowPlayer === 0) {
        msg.innerText = `Please select number of players`;
      } else if (maxPlayer != allowPlayer) {
        msg.innerText = `Please select ${allowPlayer} tockens`;
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

function CheckColour() { }

function DisplayNames() {
  switch (allowPlayer) {
    case 2:
      TwoPlayerGame();
      break;

    case 3:
      ThreePlayerGame();
      break;

    case 4:
      FourPlayerGame();
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

      break;

    case Selectedcolours22:
      Tockens3.forEach(Tocken3 => {
        Tocken3.classList.remove("hide");
      });
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });

      break;

    case Selectedcolours23:
      Tockens3.forEach(Tocken3 => {
        Tocken3.classList.remove("hide");
      });
      Tockens4.forEach(Tocken4 => {
        Tocken4.classList.remove("hide");
      });

      break;

    case Selectedcolours24:
      Tockens2.forEach(Tocken2 => {
        Tocken2.classList.remove("hide");
      });
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });

      break;

    case Selectedcolours25:
      Tockens2.forEach(Tocken2 => {
        Tocken2.classList.remove("hide");
      });
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });

      break;

    case Selectedcolours26:
      Tockens1.forEach(Tocken1 => {
        Tocken1.classList.remove("hide");
      });
      Tockens4.forEach(Tocken4 => {
        Tocken4.classList.remove("hide");
      });

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

      break;

    default:
      break;
  }
}

function ShowDice(){}

function StartGame() {
  colours.sort();
  let coloursString = colours.toString();
  // console.log(colours);

  DisplayNames(coloursString);
  ShowTockens(coloursString);
}

function TwoPlayerGame() { }

function ThreePlayerGame() { }

function FourPlayerGame() { }


let Selectedcolours21 = "Blue,Green";
let Selectedcolours22 = "Blue,Red";
let Selectedcolours23 = "Blue,Yellow";
let Selectedcolours24 = "Green,Red";
let Selectedcolours25 = "Green,Yellow";
let Selectedcolours26 = "Red,Yellow";

let Selectedcolours31 = "Blue,Green,Red";
let Selectedcolours32 = "Green,Red,Yellow";
let Selectedcolours33 = "Blue,Green,Yellow";
let Selectedcolours34 = "Blue,Red,Yellow";

let Selectedcolours41 = "Blue,Green,Red,Yellow";



//changes on 28/06/202 at 04:04