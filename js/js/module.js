// * MODULES

// **import export functions from guitar.js
// import playGuitar from "./guitar.js";

// ** other besides the default
// import { shredding,plucking } from "./guitar.js";
// console.log(playGuitar());
// console.log(shredding());
// console.log(plucking());

// * CAN RENAME FUNCTIONS AS YOU IMPORT THEM
// import { shredding as shred, plucking as pluck } from "./guitar.js";
// console.log(playGuitar());
// console.log(shredding());
// console.log(plucking());

// * ANOTHER WAY OF IMPORTING ALL AND NAME ALL
// ** not really recommended
// import * as Guitars from "./guitar.js";
// console.log(Guitars.default);
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());

// * IMPORTING A CLASS
import User from "./user.js";
const me = new User("email@email.com", "star");
console.log(me);
console.log(me.greeting());
