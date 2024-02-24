
const myObj = {
    js:"JavaScript",
    cpp: "C++",
    rb:"Ruby",
    swift:"swift by apple"
}

// object iteration can be done using for in syntax

for (const key in myObj) {
    console.log(myObj[key]);
}