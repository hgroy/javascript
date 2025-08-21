// asdding property to an object 
// computed object 

const readlineSync = require("readline-sync");
const key = readlineSync.question("what do you know about me ? (name/age/state/city) - ");

const obj = {
    name : "harsh ",
    age : 99,

}

obj.city = "bihar";    // we are aname
// dding properties using dot direct to the object 
obj.state = "patory";

// console.log(obj);/
console.log(obj[key]);