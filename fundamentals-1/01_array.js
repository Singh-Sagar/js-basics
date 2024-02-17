
const arr1 = [1, 2, 3, 4,5 ];
arr1.push(5);
//console.log(arr1);

arr1.pop();
// console.log(arr1);

// arr1.shift();
// console.log(arr1);
// arr1.unshift(1);
// console.log(arr1);


// slice does not change the original array
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let x1 = arr2.slice(1,4);
// console.log(x1);
// console.log(arr2);

let x2 = arr2.splice(0,4);
console.log(x2);
console.log(arr2);