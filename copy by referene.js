//
let arr1 = [1,2,3];// is created at location - abc123
let arr2 = arr1;// is also pointing or refering to the same memory location // copy of an array 

//shallow copy

console.log(arr1);
console.log(arr2);

arr2.push(6); // if we can make changes to the copy arr it will automatically change the original array;

console.log("updated arr1 - ", arr1); // here 6 is added to 


console.log("updated arr2 - ", arr2);// in this 6 is added 
// array reference 

//by using spread operator 
let arr3 = [...arr1];
console.log("arr3 - ",arr3);
arr3.push(9);
console.log(arr1);
console.log("updated arr3",arr3);

// create copy  using for loop


