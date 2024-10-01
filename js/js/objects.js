// * OBJECTS

const myObj = {
  username: "starclone",
  email: "sg_jardeleza",
  job: false,
  hobbies: ["Eat", "Sleep", "Rest"],
  other: { likes: "drawing", dislikes: "crowds" },
};

// * ACCESS

console.log(myObj.email);
console.log(myObj.other.likes);

// * ANOTHER WAY TO USE OBJECTS
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom";
  },
};

const car = Object.create(vehicle);
car.door = 4;
car.engine = function () {
  return "whoosh";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);

tesla.engine = function () {
  return "Shoosh";
};

console.log(tesla.engine());

// * ITERATING THE KEYS OR VALUE IN OBJECTS
const band = {
  vocals: "Luke Hemmings",
  drummer: "Ashton Irwin",
  bass: "Calum Hood",
  guitar: "Michael Clifford",
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let positions in band) {
  console.log(`On ${positions} ${band[positions]}`);
}

// * ADDING VALUES
band.keyboards = "future";

// * DELETE VALUES
delete band.keyboards;

// * DESTRUCTURING OBJECTS
function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
