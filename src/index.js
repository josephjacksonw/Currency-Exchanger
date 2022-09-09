import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService';


//Business Logic
function pullCurrencies(request) {
  CurrencyService.getExchanges()
    .then(function(response) {
      console.log(response)
      //so everything below this probably won't work bc its for an array being returned
      printResponse(response, request)
      if(response.length > 0) {
        printCurrencies(response, request);
      } else {
        printError(response, request);
      }
    });
}

//User Logic
function printResponse(response, request) {
  // let output = document.querySelector("output");
  let p = document.createElement("p");
  p.innerText = request;
  console.log(response)
  console.log(request)
  console.log(p)
  // console.log(output)
  // output.appendChild(p);
  let p2 = document.createElement("p");
  p2.innerText = "your conversion" + response.conversion_rates.AED;
  // output.appendChild(p2);
  document.getElementById("outputs").appendChild(p);
  document.getElementById("outputs").appendChild(p2);
}


function printCurrencies(response, request) {
  console.log("printCurrnecies");
  console.log(response, request);
}

function printError(response, request) {
  console.log("printError");
  console.log(response, request);
}

function handleForm(e) {
  e.preventDefault();
  console.log(pullCurrencies);
  const usd = document.querySelector("#usd").value;
  pullCurrencies(usd)
}

window.addEventListener("load", function() {
  document.querySelector("form#userInput").addEventListener("submit", handleForm);
});

/*




For this section's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

Navigate to the site to get a free key. Note that while the "Open Access" plan doesn't require an API key, it is heavily rate-limited. You are expected to get an API key through the "Free Plan", and to protect that key in your application using environmental variables.  I'VE GOT A KEY SO WE GOOD


Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!

A user should be able to enter an amount (in U.S. dollars), then specify another currency (such as the South Korean won), and submit a form. The user should then see the total amount they entered in converted currency. For example, a user might enter 10 dollars and then see that amount in South Korean won. STILL NEED TO BUILD SELECTION FUNCTIONALITY



Users should be able to convert U.S. currency into at least 5 other types of currency. SHOULDN'T BE TOO HARD IF THE ABOVE WORKS


If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.) GOTTA FIND A WAY TO MAKE AN ERROR i GUESS


If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.) OK SO LIKE IDK HOW i WOULD BUILD THIS LMAO. ILL MESS AROUND I GUESS. OK SO I 


*/