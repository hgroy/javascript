// objects  {key:value} // keys should be always string  and values can be anything // object literal :

const obj = {
  name : "harsh",
  age : 99,
  job : "student",
  skills : ["html","css","js"],
  "is he brilliant " : "yes"
};
// console.log(obj);  // to print the object 
// console.log(obj.skills); // all skills and age and job and name all are known as the properties of the object 

// console.log(obj.age);    // it is accessed using .property name ; after dot we should write single word property
// to use this property we use [] this property 


// console.log(obj.name);
// console.log(obj.job);

// access the properties :

console.log(obj["age"]);  // use [] and "";
console.log(obj["job"]);
console.log(obj["is he brilliant "]);

// when you have property name is more than one word then it should be put in the "";