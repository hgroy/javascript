// array methods : pop and slice  , splice 


let courses = ["html","css","js","reactjs","jquery"];
console.log("courses-",courses);

courses.pop();

console.log(courses);
// pop will alwys delete last item from the array 

// slice will return  reference copy of the item 
let value = courses.slice(1,4); // upper limit doesn't removed 
console.log(courses);
console.log(value);


let remain = courses.splice(2,2);  // stsart from two delete 2 items;


console.log(courses);

