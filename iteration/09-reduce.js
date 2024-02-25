// reduce is important
// it iterates and accumulates   

const arr = [1, 2, 3, 4, 5];
initial = arr[0]
const sum = arr.reduce((acc, curval)=>(acc+curval),0)
console.log(sum);