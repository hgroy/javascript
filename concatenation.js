
let userName = "harsh";
let age = 23;

 let message = "my name is " + userName + " and i am " + age + " year old ";

console.log(message);

// basically concatenation works is to add the required items and to write all the codes in one line 
// by using + we can add two variables 
// this is old tradition methods 

// we use template literals / strings 

let text = `My name is ${userName} and i am ${age} years old`;
console.log(text);

// it can make code easier readibility is good than concatenation 

// uses to write multiple line code easier 

let multipleLineCode = `My name is ${userName}
and i am ${age} years old
i love singing 
i love playing
i want you `

console.log(multipleLineCode);
