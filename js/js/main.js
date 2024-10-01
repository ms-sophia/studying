// * ERROR HANDLING AND ERRORS

// * USING "use strict"
// ** allows handling error for variable declaration
// ** should be on top of the file
// "use strict";
// variable = "star";
// console.log(variable);

// * W/O USING "use strict"
// ** will not throw an error on variable declaration
// variable = "bleh";
// console.log(variable) // no errors in console

// * DIFFERENT ERROR TYPES
// ** Reference error
// ** Syntax error
// ** Type error

// * TRY AND CATCH
// ** try a code, then catch the code error
// "use strict";
// const makeEror = () => {
//   try {
//     const name = "Dave";
//     name = Joe;
//   } catch (err) {
//     console.error(err);
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);
//     console.warn(err);
//     console.table(err);

//     // might want a function to log error
//     // logTheError(err.stack); //create function
//   }
// };

// makeEror();

// * MAKING A CUSTOM ERROR
// "use strict";
// const makeError = () => {
//   try {
//     throw new customError("This is a custom error!");
//   } catch (err) {
//     console.error(err.stack);
//   }
// };

// makeError();

// function customError(message) {
//   this.message = message;
//   this.name = "customerError";
//   this.stack = `${this.name} : ${this.message}`;
// }

// * GENERIC BUILT-IN ERROR
// "use strict";
// const makeError = () => {
//   try {
//     // ** change from customError to Error(built-in)
//     throw new Error("This is a error!");
//   } catch (err) {
//     console.error(err.stack);
//   }
// };

// makeError();

// * USING WITH FINALLY BLOCKS
// ** always come at the end
"use strict";
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("odd number!");
      }
      console.log("Even number!");
    } catch (err) {
      console.error(err.stack);
    } finally {
      // ** execute not matter what
      console.log("...finally");
      i++;
    }
  }
};

makeError();
