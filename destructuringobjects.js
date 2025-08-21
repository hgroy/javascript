// destructuring objects 
let object = {
    name:"harsh",
    address : {
        state : "bihar",
        dist : "samastipur",
        at : "bhaua"
    },
    courses : ["html", " css", "js"]
}

// let {name,address,courses} = object;

// console.log(name);
// console.log(address);

// let {address}= object;
// console.log(address);

// let {name, ...rest} = object;
// console.log(rest); //using rest 

// changing rthe property of object 

// let {name : userName} = object;
// console.log(userName);

let {name,address:{dist},courses}  = object;
// console.log(address);  it doesnt work

console.log(dist); // it works 

//what you want to get is the closest bracket{} write in the innerest {} it will gives you the 