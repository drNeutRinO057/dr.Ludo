let bulb = document.querySelector("#bulb")
let btnon = document.querySelector("#on");
let btnoff = document.querySelector("#off");


btnon.addEventListener("click", () => {
  bulb.src = "Bulb On.jpg";
});

btnoff.addEventListener("click", () => {
  bulb.src = "Bulb Off.jpg";
});
