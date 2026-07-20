//problem2.Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.


let price1 = "5";
let price2 = 5;

console.log(price1 == price2); 
console.log(price1=== price2);

// In this case "5"==5 will return true because the double operator (==) performs type coercion, converting the string "5" to a number before comparison.
// On the other hand, "5"===5 will return false because the triple operator (===) checks for both value and type, and since one is a string and the other is a number, they are not considered equal.