// Create a function that takes an integer as an argument and returns "Even" for even numbers
// or Odd for odd numbers

const even_or_odd = number =>
{
    if (number % 2 == 0) return "Even"
    else return "Odd"

    // or ternary operator 
    
    // return number % 2 === 0 ? 'Even' : 'Odd';
   
        
}

console.log(even_or_odd(0))
console.log(even_or_odd(2))
console.log(even_or_odd(3))
console.log(even_or_odd(-3))