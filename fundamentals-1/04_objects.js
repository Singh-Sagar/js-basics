
const obj1 = {1:"one", 2: "two"}
const obj2 = {3:"tri", 4: "quad"}
const obj3 = {5: "pentagon", 6:"hexa"}


// We are assign obj1, obj2 , obj3 to {}
// {} => target object
const obj = Object.assign({}, obj1, obj2, obj3);

// we can also use spread operator for the above task
const spreadObj = {...obj1, ...obj2, ...obj3};
console.log(obj)
console.log(spreadObj)
