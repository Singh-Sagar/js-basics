// Numbers can also be created using object notation
let num1 = 1000;
let num2 = new Number(6192);

// gives a number to two decimal place approximation(depending upon situation)
console.log(num2.toFixed(2));

console.log(num1.toString());
console.log(typeof num1.toString());

console.log(num1.toPrecision(2)); // follows the standard physics rules.
