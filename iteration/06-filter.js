// There is a fundamental problem with forEach => it doesn't return any value
// filter comes into picture

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reqNums = myNums.filter( (nums)=>nums>4)
console.log(reqNums);