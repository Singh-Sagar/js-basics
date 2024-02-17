
const protagonists = ["Edward Elric", "Gon", "Killua","Spike","Ota"]

const antagonist = ["Meruem", "Father", "vicious"]

// const chars = protagonists.concat(antagonist);
// console.log(chars);

//spread glass components
const chars = [...protagonists,...antagonist];
// console.log(chars);

const layeredArr = [1, 2, 3, 4, [1, 2, 3, [4, 5, 6, 7]]];
const simplifiedArr = layeredArr.flat(Infinity);
// console.log(simplifiedArr);

const text = "convert me to array";
const textArr = Array.from(text);
// console.log(textArr);
const dict1 = {name:"Jitendra",
age:28};
const dict1Arr = Array.from(dict1); // Special case worth remembering
// console.log(dict1Arr); // prints empty array

const score1 = 121;
const score2 = 532;
const score3 = 327;

const scoreArr = Array.of(score1, score2, score3); // creates an array with elems
// console.log(scoreArr);

let textInfo = "my name is damien";
console.log(Array.isArray(textInfo));
textInfo = Array.from(textInfo);
console.log(Array.isArray(textInfo));


