const selectbox = document.querySelector(`.selectbox`);
const options = document.querySelectorAll(`.radio-group input[name="options"]`);
const tickboxes = document.querySelectorAll(`.tickbox input[type="checkbox"]`);
const msg = document.querySelector(`.msg`);
const tockens = document.querySelectorAll(`.tocken`);
const playerNames = document.querySelectorAll(`.tickbox input[type="text"]`);
const Placeholders = document.querySelectorAll(`.pInput`);
const p1Name = playerNames[0];
const p2Name = playerNames[1];
const p3Name = playerNames[2];
const p4Name = playerNames[3];

const playerA = document.querySelector(`.boxA p`);
const playerB = document.querySelector(`.boxB p`);
const playerC = document.querySelector(`.boxC p`);
const playerD = document.querySelector(`.boxD p`);

const button = document.querySelector(`.start`);

let diebox = document.querySelector(".theDice");
let maxPlayer = 0;
let allowPlayer = 0;

window.onload = () => {
  DisableButtons();
  diebox.classList.add("hide");
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
console.log(p1Name);
// console.log(p2Name);
// console.log(p3Name);
// console.log(p4Name);
// console.log(tickboxes[0].className);
// console.log(playerA);
// console.log(playerB);
// console.log(playerC);
// console.log(playerD);
// console.log(playerNames);
console.log(ColourCombination.twoPlayers.RY);

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

function SelectPlayer() {
  options.forEach((option) => {
    option.addEventListener("click", () => {
      UncheckBoxes();
      allowPlayer = option.value;
      allowPlayer = Number(allowPlayer);
      if (option.checked === true) {
        DisableAllInputs();
        ResetPlaceholders();
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
      } else if (tickbox.checked === false) {
        maxPlayer -= 1;
        tickboxClass = tickbox.className;
        DisableInput(tickboxClass);
        msg.innerText = ``;
      }
      if (maxPlayer > allowPlayer) {
        tickbox.checked = false;
        maxPlayer -= 1;
        tickboxClass = tickbox.className;
        DisableInput(tickboxClass);
        msg.innerText = `You can't select more than ${allowPlayer} players`;
      }
      if (allowPlayer === 0) {
        msg.innerText = `Please select number of players`;
      }
      SetPlaceholders(tickbox);

      console.log(`Checked: ${tickbox.checked}`);
      console.log(`Selected: ${maxPlayer}`);
      console.log(`Allowed: ${allowPlayer}`);
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
        console.log(tickbox.className);
        msg.innerText = `Ready...`;
        selectbox.classList.add(`hide`);
      } else if (allowPlayer === 0) {
        msg.innerText = `Please select number of players`;
      } else if (maxPlayer != allowPlayer) {
        msg.innerText = `Please select ${allowPlayer} tockens`;
      }
    });
    console.log(msg.innerText);
  });
}

function HideTockens() {
  tockens.forEach((tocken) => {
    tocken.classList.add(`hide`);
    // console.log(tocken);
  });
}

function CheckColour() {}

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

function ShowTockens() {}

function StartGame() {
  // DisplayNames();
}

function TwoPlayerGame() {}

function ThreePlayerGame() {}

function FourPlayerGame() {}

// some changes are made at 2:47 PM

