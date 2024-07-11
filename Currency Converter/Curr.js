let CurrURL = "https://latest.currency-api.pages.dev/v1/currencies/usd.json";
let CurrURL2 =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_fpIItzVK0iWsyKbyXHcWNw5s46jvqvrriuMo1gni";
let CurrURL3 =
  " https://v6.exchangerate-api.com/v6/ce32778385ba07cdfb2615e3/latest/USD";

let inputMsg = document.querySelector(".input p");
const btn = document.querySelector("button");
let msg = document.querySelector(".msg");
let fromCurrCode = document.querySelector("#selectfrom");
let toCurrCode = document.querySelector("#selectto");

const dropdowns = document.querySelectorAll(".dropdowns select");

for (let select of dropdowns) {
  for (let CurrCode in countryList) {
    // console.log(Code, countryList[Code]);
    let newOption = document.createElement("option");
    newOption.innerText = CurrCode;
    newOption.value = CurrCode;
    if (select.name === "from" && CurrCode === "USD") {
      newOption.selected = "selected";
    }
    if (select.name === "to" && CurrCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const updateFlag = (element) => {
  let CurrCode = element.value;
  let CountryCode = countryList[CurrCode];
  let newSrc = `https://flagsapi.com/${CountryCode}/flat/64.png`;
  let flag = element.parentElement.querySelector("img");
  flag.src = newSrc;
  inputMsg.innerText = `Enter Amount in ${fromCurrCode.value}`;
  msg.innerText = ``;
};

btn.addEventListener("onmousedown", (e) => {
  btn.classList.remove("btn");
});
btn.addEventListener("onmouseup", (e) => {
  btn.classList.add("btn");
});

window.addEventListener("load", () => {
  UpdateValue();
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  UpdateValue();
});

const UpdateValue = async () => {
  let amount = document.querySelector("input");
  let fromVal = amount.value;
  if (fromVal === "" || fromVal < 1) {
    fromVal = 1;
    amount.value = "1";
  }

  // let from = fromCurrCode.value.toLowerCase();
  // let to = toCurrCode.value.toLowerCase();
  // let response = await fetch(CurrURL);
  // let val = await response.json();
  // let Curr = val.usd;
  // // console.log(val);
  // let conversionVal = Curr[to] / Curr[from];
  // conversionVal = conversionVal.toFixed(4);
  // // console.log(conversionVal);
  // let toVal = fromVal * conversionVal;

  // let response2 = await fetch(CurrURL2);
  // let val2 = await response2.json();
  // let price = val2.data;
  // // console.log(val2);
  // let pricefrom = price[fromCurrCode.value].value.toFixed(4);
  // let priceto = price[toCurrCode.value].value.toFixed(4);
  // // console.log(pricefrom);
  // // console.log(priceto);
  // conVal = priceto / pricefrom;
  // let toVal2 = pricefrom * conVal;
  // console.log(toVal2);

  let response3 = await fetch(CurrURL3);
  let val3 = await response3.json();
  let price3 = val3.conversion_rates;
  // console.log(val2);
  let pricefrom3 = price3[fromCurrCode.value];
  let priceto3 = price3[toCurrCode.value];
  // console.log(pricefrom3);
  // console.log(priceto3);
  conVal3 = priceto3 / pricefrom3;
  let toVal3 = fromVal * conVal3;
  toVal3 = toVal3.toFixed(4);
  // console.log(toVal3);

  msg.innerText = `${toVal3} ${toCurrCode.value}`;
  // console.log(msg.innerText);
};
