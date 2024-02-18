// Rest operator and spread operator are one and same, but depends
// upon the context in which you are using them

function addPrice(...num){
    return num;
}

console.log(addPrice(10,20,30));