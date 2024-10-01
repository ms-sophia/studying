// * Javascript Classes

// * version 1 - normal, outline
// class Pizza {
//   constructor() {
//     this.size = "medium";
//     this.crust = "original";
//   }

//   bake() {
//     console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
//   }
// }

// const myPizza = new Pizza();
// myPizza.bake();

// * version 2 - with passing values
// class Pizza {
//   constructor(pizzaFlavor, pizzaSize) {
//     this.flavor = pizzaFlavor;
//     this.size = pizzaSize;
//     this.crust = 'thin';
//   }

//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.flavor} ${this.crust} crust pizza`
//     );
//   }
// }
// const myPizza = new Pizza("hawaiian", "small");
// myPizza.bake();

// * version 3
// ** changing values w / o directly accessing to it
// class Pizza {
//   constructor(pizzaFlavor, pizzaSize) {
//     this.flavor = pizzaFlavor;
//     this.size = pizzaSize;
//     this.crust = "thin";
//   }

//   // ** new added lines
//   get pizzaCrust() {
//     return this.crust;
//   }
//   set pizzaCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }

//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.flavor} ${this.crust} crust pizza`
//     );
//   }
// }
// const myPizza = new Pizza("hawaiian", "small");
// myPizza.pizzaCrust = "cheese";
// myPizza.bake();
// console.log(myPizza.pizzaCrust);

// * version 4
// ** sir dave's method, using method, related to version 3
// class Pizza {
//   constructor(pizzaFlavor, pizzaSize) {
//     this.flavor = pizzaFlavor;
//     this.size = pizzaSize;
//     this.crust = "thin";
//   }

//   // ** changed lines
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }

//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.flavor} ${this.crust} crust pizza`
//     );
//   }
// }
// const myPizza = new Pizza("hawaiian", "small");
// myPizza.setCrust("cheese");
// myPizza.bake();
// console.log(myPizza.getCrust());

// * version 5
// ** when arrays are added
// class Pizza {
//   constructor(pizzaFlavor, pizzaSize) {
//     this.flavor = pizzaFlavor;
//     this.size = pizzaSize;
//     this.crust = "thin";
//     this.toppings = [];
//   }

//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }

//   getToppings() {
//     return this.toppings;
//   }

//   setToppings(topping) {
//     this.toppings.push(topping);
//   }

//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.flavor} ${this.crust} crust pizza`
//     );
//   }
// }
// const myPizza = new Pizza("hawaiian", "small");
// myPizza.setCrust("cheese");
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("pineapple");
// myPizza.setToppings("bacon");
// console.log(myPizza.getToppings());

// * version 6
// ** becomes a parent class/super class
// parent is the blueprint
// class Pizza {
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "thin";
//   }

//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
// }
// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }

//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }

// const mySpeciality = new SpecialtyPizza("medium");
// mySpeciality.slice();

// * Factory function, naming convention
// ** a different way to not access private variable
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
//   };
// }
// const myPizza = pizzaFactory("small");
// myPizza.bake();

// * Another way for private and public
// class Pizza {
//   crust = "original";
//   #sauce = "marinera";
//   #size;
//   constructor(pizzaSize) {
//     this.#size = pizzaSize;
//   }

//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }

//   hereYouGo() {
//     console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza`);
//   }
// }

// const myPizza = new Pizza("large");
// myPizza.hereYouGo();

// * EXAMPLE CREATED BY ME
class Gamer {
  hobbies = [];
  #count;
  constructor(Gamer_username, Gamer_age, Gamer_email) {
    this.username = Gamer_username;
    this.age = Gamer_age;
    this.email = Gamer_email;
  }

  greeting() {
    console.log(`Hi ${this.username}`);
  }

  getHobbies() {
    return this.hobbies;
  }

  setHobbies(hobby) {
    this.hobbies.push(hobby);
  }

  displayMsg() {
    console.log("Your following info:\n");
    console.log(`age = ${this.age} \nemail address: ${this.email}`);
  }

  displayHobbies() {
    console.log("\nthis are you hobbies:\n");
    for (let element in this.hobbies) {
      console.log(`${this.hobbies[element]}`);
    }
  }
}

const userGamer = new Gamer("starclone", 24, "sgsj@com");
userGamer.greeting();
userGamer.setHobbies("drawing");
userGamer.setHobbies("roblox");
userGamer.setHobbies("reading");
userGamer.displayMsg();
userGamer.displayHobbies();
