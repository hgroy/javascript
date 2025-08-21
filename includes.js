// include method 
const availableSize = ["s","m","L","XXL","XXXL"];
const readlineSync = require("readline-sync");
const userSize = readlineSync.question("which size you want : (s/m/L/XXL/XXXL) - ");

const isAvailableSize = availableSize.includes(userSize);
if(availableSize){
    console.log("size is available");
}else{
    console.log("size is not available");
}