import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService';


//Business Logic
function pullCurrencies(request) {
  CurrencyService.getExchanges()
    .then(function(response) {
      // console.log(response)
      // //so everything below this probably won't work bc its for an array being returned
      // console.log(typeof(response))
      // console.log(response.Error)
      // console.log("the next one says error if its an error")
      // console.log(response.name)
      if (response.name === "Error") {
        console.log("this error check worked")
        console.log(response)
        printError(response, request)
      } else {
        printCurrencies(response, request)
      }
      
      // console.log(response.message)
      // console.log(response.cause)
      // console.log(response.toString()) // this one will output it
      // printResponse(response, request)
      
      // if (response.typeof() === "string") {
      //   console.log("hey this error check works")
      // }
      // if(response.length > 0) {
      //   printCurrencies(response, request);
      // } else {
      //   printError(response, request);
      // }
    });
}

//User Logic
// function printResponse(response, request) {
//   // let output = document.querySelector("output");
//   let p = document.createElement("p");
//   p.innerText = request;
//   console.log(response)
//   console.log(request)
//   console.log(p)
//   // console.log(output)
//   // output.appendChild(p);
//   let p2 = document.createElement("p");
//   p2.innerText = "your conversion" + response.conversion_rates.AED;
//   // output.appendChild(p2);
//   document.getElementById("outputs").appendChild(p);
//   document.getElementById("outputs").appendChild(p2);
// }

// function convert(e) {
//   e.preventDefault();
//   let currency = document.querySelector('input[name="currency"]:checked').value
//   let p = document.createElement("p")
//   p.innerText= currency
  
//   // oh shit then I guess it won't just hold that info for me will it
//   // or I can just call it again lol
//   // or don't call it until they hit this one
//   // or since this is from the other function maybe its still saved?
//   // new plan, see if currencies says anything in the handleform
//   document.getElementById("conversion").appendChild(p);
// }


function printCurrencies(response, request) {
  console.log("printCurrnecies");
  console.log(response, request);
  let p = document.createElement("p");
  p.innerText = "$" + request;
  document.getElementById("outputs").appendChild(p);
  let currency = document.querySelector('input[name="currency"]:checked').value;
  console.log(currency)
  if (currency === "none") {
    let p2 = document.createElement("p");
    p2.innerText = "API called, select a unit to convert it to";
    document.getElementById("outputs").appendChild(p2);
  } else {
    let p2 = document.createElement("p");
    let conversion = response.conversion_rates[currency]
    p2.innerText = "Your money is equal to " + (request * conversion) + " in " + currency
    console.log("im checking the object output")
    console.log(response)
    console.log(response.conversion_rates)
    console.log(response["conversion_rates"].AED) //this one does pull AED
    console.log(response.conversion_rates[currency]) //ok this one is it
    document.getElementById("outputs").appendChild(p2)
  }
}

function printError(response, request) {
  console.log("printError");
  console.log(response, request);
  let p = document.createElement("p")
  p.innerText = response
  document.getElementById("outputs").appendChild(p)
}

function handleForm(e) {
  e.preventDefault();
  const usd = document.querySelector("#usd").value;
  pullCurrencies(usd)
  let outputclear = document.getElementById("outputs")
  outputclear.innerHTML = null
 
  // this doesn't work so I would need to switch it to inside of the printCurrencies
  document.getElementById("currencyForm").removeAttribute("class")
  //document.querySelector("form#currencies").addEventListener("click", convert);
}

window.addEventListener("load", function() {
  document.querySelector("form#userInput").addEventListener("submit", handleForm);
});

/*


my understanding: they input and it calls the api, I need to make the second part not appear until after they submit, then it will ask them what kind of thing they want. Which means I need to create the event listener at some point in there




So right now, they can put in a value. when they hit submit I take that number and call the api to bring up the conversion api. The error check now sends the error to the right spot along with the error code

I need to make sure that the function then outputs the amount they put in
Then I need to have something check to see if there is anything checked in the radio form. 
if there isn't then it will say to select a currency to convert it to
if there is then it just shows what it is
  I can probably just have it as hidden text that always changes based on whether there is somehting selected or not



For this section's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

Navigate to the site to get a free key. Note that while the "Open Access" plan doesn't require an API key, it is heavily rate-limited. You are expected to get an API key through the "Free Plan", and to protect that key in your application using environmental variables.  I'VE GOT A KEY SO WE GOOD


Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!

A user should be able to enter an amount (in U.S. dollars), then specify another currency (such as the South Korean won), and submit a form. The user should then see the total amount they entered in converted currency. For example, a user might enter 10 dollars and then see that amount in South Korean won. STILL NEED TO BUILD SELECTION FUNCTIONALITY



Users should be able to convert U.S. currency into at least 5 other types of currency. SHOULDN'T BE TOO HARD IF THE ABOVE WORKS


If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.) GOTTA FIND A WAY TO MAKE AN ERROR i GUESS


If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.) OK SO LIKE IDK HOW i WOULD BUILD THIS LMAO. ILL MESS AROUND I GUESS. OK SO when they submit the money they have, I output their currecnty and say what that would be


*/