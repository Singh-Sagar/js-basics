
// As per the offical docs, data types are of two types: Primitive and Non-primitive

// Primitive
// string, null, undefined, number, symbol, boolean, bigInt

const id = Symbol(12);
const id2 = Symbol(12);
console.log(id==id2);

console.log(typeof null); // null => object
console.log(typeof undefined); // undefined => undefined


// Non-primitive
// Arrays, Objects, Functions


// Primitive data types are call by value
// Non-primitives data types are call by reference