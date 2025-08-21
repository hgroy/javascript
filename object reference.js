// object reference 

const person1 = {
    name : "harsh",
    age : 23
}

// console.log(person1);

// const person2 = person1;

// console.log(person2);

// person2.name = "gaurav";
// console.log(person2);
// console.log(person1); // it will change the person 1 will also change thats why 

// person1.age = 65;
// console.log(person1);

// this is know as swallow copy in which you are modifying the one the changes were seen in other or other can feel the changes 
// to avoid this deep copy using 
// spread 
// json 

const person2 = Object.assign({},person1);  // it takes two value {}, ....
// console.log(person2);
person2.name = "ashish";
person1.age = 34;
console.log(person1);
console.log(person2);

// when we have only level of object assign acts as a deep copy but when its is more than one then it acts as a swallow copy 


