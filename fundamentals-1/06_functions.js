// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// sum = addTwoNumbers(1,2);
// console.log(sum);

// a function to print username if 
// given a true string

function welcomeUser(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return ` welcome ${username}`
}

console.log(welcomeUser("Sareng"))