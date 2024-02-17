
// singleton => using constructor method


// object literals

const User1 = {name:"Onizuka",
            age:22,
            expertise: ["martial arts", "video games", "dating"],
            location:"Osaka",
            "favorite game":"Fallout",
}

// Two ways to access properties
// console.log(User1.name);
// console.log(User1["favorite game"]) // no other way 

// Use a symbol as a key
const mySym = Symbol("ver");
//User1[[mySym]] = 0.01;
// failed

const newDict = {
    [mySym]:"nothing 2",
    two: "dark",
}
console.log(newDict[mySym]);
console.log(newDict)
