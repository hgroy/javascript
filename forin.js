// for in 
const obj = {
    name : "harsh",
    job : "student",
}

const isPropertyAvl = "name" in obj;
// console.log(isPropertyAvl);

for(let key in obj){
    console.log(key,obj[key]);
}