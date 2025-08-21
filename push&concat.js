//    array methods : push and concat 
// mutable (changed) object or immutable (not changed ) boject 

let fruits =["apple", "banana", "mango"];

// to add something to the array we can use push method ()
console.log(fruits);
fruits.push("orange");
console.log(fruits);

fruits.push("kiwis","pineapp","melons");
console.log(fruits);

//concat method :


let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr4 = [11,12,13];

// add both array combines two or more arrays 

let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr5 = arr1.concat(arr2,arr4);
console.log(arr5);

// it can concate more than two arrays 

