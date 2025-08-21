// iterating in array 
// non primitive data type because it contains more than 1 value thats why '

let s1 = "harsh ";
let s2 = "priya";
let s3 = "prachi";
let s4 = "divya";
// the more memory we use the slow execution takes place thats why we have to avoid it ;

let studentsName = ["prakash","harsh","rakesh","prachi","priya",1,2,3,4,["html","css","js"], {schoolName : "ssvm"}];
console.log(studentsName);

// we can add strings , arrays, numbers, objects all the datatypes in the array ; its the beauty of using an array ;

// we can print separate item from the value ;
// array length means the number of elements present in the array or total size of the array is defined as the array length 

for(i = 0; i<studentsName; i++){
    console.log(studentsName[i]);

}
console.log(studentsName.length);

// we have to assign into a variable theese properties like length etc 
for(let item of studentsName){  // it will print the items in the array 
    console.log(item);
}

for(let item in studentsName){    // it will give the indexes of the item 
    console.log(item);
}