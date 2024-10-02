// * WEB STORAGE API
// ** not part of the DOM - referes to the Window API
// ** available to JS via the global variable: window

// * We do not have to type window it is implied
// result in the same output
// window.alert("ok!");
// alert("ok!");

// ** location
// alert(window.location);

// * WEB STORAGE
// ** only stores string data

const myArray = ["eat", "sleep", "code"];


const myObj = {
    name: "star",
    hobbies: ['sleep', 'eat', 'code'],
    logname: function () {
        console.log(this.name);
    }
}


// * SESSION STORAGE
// ** only keeps the data when you are in the website
// sessionStorage.setItem("mySessionStore", myArray);
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(mySessionData);
// console.log(typeof mySessionData);

// *using JSON
// ** don't just string data, also get back JSON object

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);
// console.log(typeof mySessionData);

// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);
// console.log(typeof mySessionData);

// * LOCATION STORAGE
// ** will retrieve even though close, be persistent data

// localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
// console.log(myLocalData);
// console.log(typeof myLocalData);


// * OTHER METHODS and PROPERTY

// ** Remove item
// localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
// console.log(myLocalData);

// ** Clear
// localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.clear();
// const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
// console.log(myLocalData);

// ** return the key & length
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const key = localStorage.key(0);
const StoreLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
console.log(key);
console.log(StoreLength);
