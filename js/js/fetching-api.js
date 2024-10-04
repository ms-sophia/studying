// * FETCH API

// * CALLBACKS
// ** functions that are paseed to other functions as parameters
// function firstFunction(parameters, callback) {
//     // ** call of function that in turn will call another function, chain of events
//     callback();
// }
// // ** AKA "callback hell"
// firstFunction(para, function () {
//     secondFunction(para, function () {
//         thirdFunction(para, function () {
//         })
//     });
// })

// * PROMISES
// ** better than callbacks
// ** has 3 states: Pending, Fulfilled, Reject
// ** will deliver async code
// ** excuting blocks code at once
// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! resolved the promise!");
//   } else {
//     reject("No rejected the promise");
//   }
// });

// ** this does not get the value but the state of Promise
// console.log(myPromise);

// ** to get the value of the promise, need to chain, use Thenables
// ** these are chained together
// myPromise
//   .then(value => {
//   // console.log(value);
//   return value + 1;
// })
//   .then(newValue => {
//   console.log(newValue)
//   })
//   // ** goes through or skips the chain to catch of the error
//   .catch(err => {
//     console.error(err);
//   })
// ** Fetch using timeout
// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resovle")
//   }, 3000) // ** waits for 3 secs
// });

// myNextPromise.then(value => {
//   console.log(value);
// });
// // ** eto muna bago nextPromise at wait sya for 3 seconds
// myPromise.then(value => {
//   console.log(value);
// });

// * PENDING STATE USING FETCH API
// const users = fetch("https://jsonplaceholder.typicode.com/users")

// ** pending state
// console.log(users);

// ** wait and fetch using thenables
// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     // console.log(response)

//     // ** using JSON Method
//     return response.json();
//   })
//   .then(data => {
//     data.forEach(user => {
//       console.log(user);
//     })
//     // console.log(data);
//   });

// * ASYNC and AWAIT
// ** to use AWAIT, must be within a ASYNC function
// ** wait then pero mas cleaner
// const myUsers = {
//   userList: [],
// };

// // ** two ways of writing the function
// // ** #1
// // async function myCoolFunction() {
// //   // do here
// // }
// // ** #2
// const myCoolFunction = async () => {
//   // ** telling to wait to get the results before doing the next thing
//   const response = await fetch("https://jsonplaceholder.typicode.com/users"); // ** this is a promise
//   const jsonUserData = await response.json(); // ** is a promise
//   // console.log(jsonUserData);
//   return jsonUserData;
// };

// // myCoolFunction();

// const anotherFunction = async () => {
//   // ** waits for myCoolFunction to complete
//   const data = await myCoolFunction();
//   // console.log(data);
//   // ** needs to be inside the chain for it to work
//   myUsers.userList = data;
// };

// anotherFunction();
// console.log(myUsers.userList); // ** wont work cause its not inside the chain of events

// * EXAMPLES

// * workflow function
// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   // ** gets user email
//   const userEmailArray = jsonUserData.map(user => {
//     return user.email;
//   })

//   console.log(userEmailArray);
// }

// getAllUserEmails();

// ** how use the data
// *** call mo yung function sa loob ng async function
// *** tas create function ka
// *** tas call mo yung asyn function
// *** gagana yan kasi nasa loob na async function yung ginawa mo function
// *** unlike dun sa previous

// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   // ** gets user email
//   const userEmailArray = jsonUserData.map(user => {
//     return user.email;
//   })

//   postToWebPage(userEmailArray);

// }

// const postToWebPage = (data) => {
//   console.log(data);
// }

// getAllUserEmails();

// * 2nd parameter of fetch is always a object

// ** using GET
// const getDadJokes = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//       // Accept: "text/plain"
//     }
//   });
//   const jsonJokeData = await response.json();
//   // console.log(jsonJokeData.joke);
//   console.log(jsonJokeData);

//   // *** deliver data that is not json, switch to text plain
//   // const textJokeData = await response.text();
//   // console.log(textJokeData);

// }

// getDadJokes();

// ** using POST
// *** requesting new data to be recorded
// const jokeObj = {
//   id: "82gqciGBdFd",
//   joke: "I used to be addicted to the hokey pokey, but I turned myself around.",
// };

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // Accept: "text/plain"
//     },
//     // *** pag POST lagi may body
//     body:JSON.stringify(jokeObj)
//   });
//   const jsonResponse = await response.json();
//   // console.log(jsonJokeData.joke);
//   console.log(jsonResponse.headers);
// };

// postData(jokeObj);

// ** check API documentation

// const requestJoke = async (firstName, lastName) => {

//   // *** ? - starts the parameters
//   // *** & - change the parameters after the first, chains the parameters
//   const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`); // *** link is broken

//   const jsonResponse = await response.json();

//   console.log(jsonResponse.value.joke);
// };

// requestJoke("Clint","Eastwood");

// * ABSTRACT INTO FUNCTIONS
// *** this is how you will usually write in program
// *** ibreak down mo sya

// ** Maybe from a form

const getDataFromForm = () => {
  const requestObject = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObject;
};

// *** returns the url based from the object we passed in
const buildRequestUrl = (requestData) => {
  return `http://api.icnd.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`; // *** link is broken
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.jokee;
  console.log(joke);
  // ** call function that would display the joke
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// ** PROCEDURAL "workflow" function
const processJokeReqeust = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);

  console.log("finish");
};

processJokeReqeust();
