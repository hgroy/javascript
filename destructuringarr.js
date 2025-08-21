// destructuring the array []:
// it means the unpack the objects 

const arr = [1,2,3];
const [a,b,c] = [1,2,3];  // simply write arr

// console.log(a);

// console.log(b);

// console.log(c);

const [, , t] = arr;
console.log(t);

// swap the numbers  // using destructing array 


let x = 7;
let  y = 8;
 [x,y]  = [y,x];

 console.log(x);
 console.log(y);

