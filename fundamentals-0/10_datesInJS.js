// Date is an object in javascript ( interview question)

let counter1 = Date.now();

let myDate = new Date();
// Date can be converted to multiple formats as per our requirements

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log("JSON",myDate.toJSON());

// Defining date
let manualDate = new Date(2024,10,13,14,20);
console.log(manualDate.toDateString());
console.log(manualDate.toTimeString());

// Date can be defined using many different ways. Do look for details. 

// now is a method that is associated with the Date object and it is measured in ms
//from a fixed date specified under ECMA standards 
let counter2 = Date.now();
console.log(`This program ran in ${(counter2-counter1)/1000} secs`);


// Remember month starts with 0(CS indexing)

let newDate = new Date();
console.log(newDate.toLocaleDateString('default',{
    weekday:"long",
    month:"short",
    //timeZone:"Asia/Kolkata",
    
}))
