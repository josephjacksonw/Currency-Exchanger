export default class CurrencyService {
  static getExchanges() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}

// export default class CurrencyService {
//   static getExchanges() {
//     return fetch(`https://v6.exchangerate-api.com/v6/12/latest/USD`)
//       .then(function(response) {
//         if (!response.ok) {
//           const errorMessage = `${response.status} ${response.statusText}`;
//           throw new Error(errorMessage);
//         } else {
//           return response.json();
//         }
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// }


//so this one checked to see if I could just check the output.result is error but I think I can do a different way

// export default class CurrencyService {
//   static getExchanges() {
//     return fetch(`https://v6.exchangerate-api.com/v6/latest/USD`)
//       .then(function(response) {
//         if (response.result === "error") {
//           console.log("hey this error check works")
//         } else {
//           console.log(response.result)
//         }
//         if (!response.ok) {
//           const errorMessage = `error response stuff with $ {}`;
//           throw new Error(errorMessage);
//         } else {
//           return response.json();
//         }
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// }