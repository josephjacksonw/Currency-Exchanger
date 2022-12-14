import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService';


//Business Logic
function pullCurrencies(request) {
  console.log("pull request")
  CurrencyService.getExchanges()
    .then(function(response) {
      if (response.name === "Error") {
        printError(response);
      } else {
        printCurrencies(response, request);
      }
    });
}

//User Logic
function printCurrencies(response, request) {
  let p = document.createElement("p");
  p.innerText = "$" + request;
  document.getElementById("outputs").appendChild(p);
  let currency = document.querySelector('input[name="currency"]:checked').value;
  if (currency === "none") {
    // let p2 = document.createElement("p");
    // p2.innerText = "API called, select a unit to convert it to";
    // document.getElementById("outputs").appendChild(p2);
  } else {
    let p2 = document.createElement("p");
    let conversion = response.conversion_rates[currency];
    p2.innerText = "Your money is equal to " + (request * conversion) + " in " + currency;
    document.getElementById("outputs").appendChild(p2);
  }
}

function printError(response) {
  let p = document.createElement("p");
  p.innerText = response;
  document.getElementById("outputs").appendChild(p);
}

function handleForm(e) {
  e.preventDefault();
  let currency = document.querySelector('input[name="currency"]:checked').value;
  const usd = document.querySelector("#usd").value;
  let outputclear = document.getElementById("outputs");
  outputclear.innerHTML = null;
  document.getElementById("currencyForm").removeAttribute("class");
  // if (currency === "none"){
  //   console.log("there is no thing")
  // } else {
    
  // }
  if (usd === "") {
    console.log("no money")
    document.getElementById("currencyForm").setAttribute("class", "hidden");
    let p = document.createElement("p");
    p.innerText = "Error: Please input an amount in USD";
    document.getElementById("outputs").appendChild(p);
  } else {
    if (currency === "none"){
      console.log("there is no thing")
    } else {
    pullCurrencies(usd);
    }
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#userInput").addEventListener("submit", handleForm);
});