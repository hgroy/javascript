// spread operator 

// spreading the array means :

const arr = [1,2,3,4,5,6];
// console.log(arr);
// console.log(...arr); // output is not an array 

const arr2 = [7,8,9,10];

const arr3 = [...arr,16,17,...arr2];
console.log(arr3);

// we can add using spread operator // use for merging element of array 
