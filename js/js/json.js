// * JSON
/*
 ** used to send and receive data
 */

const myObj = {
  name: "Star",
  hobbies: ["eat", "sleep", "pray", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(sendJSON.name); // ** undefined bcuz it is string

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON.hobbies); // ** object na uli sya dahil sa parse
