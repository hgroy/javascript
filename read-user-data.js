//read data from user 
const readlineSync = require("readline-sync");

 const userName = readlineSync.question("may i know ur name? ");

 //console.log("welcome "  + userName + " to gfg");
 console.log(`welcome ${userName} to gfg`);

 const userAge = readlineSync.question("may i know ur age?");
 console.log("thank for letting us know your age");

 const yearOfBirth = 2025 - userAge;
 console.log(`you were born in the year  ${yearOfBirth}`);
// input default type is always is string in js 
