// * DESTRUCTURING

function calculator(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculator(8, 4);
console.log(subtract);
console.log(add);
console.log(multiply);
console.log(divide);

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

myVehicle(vehicleOne);
function myVehicle({ type, color, brand, model }) {
  console.log(`my ${type} is a ${color} - ${brand} - ${model}`);
}
