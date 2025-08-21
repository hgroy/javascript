// objects methods 

const object = {
    name : "harsh",
    age : 32,
    city : "bihar "
}

const entries = Object.entries(object);
console.log(entries);

const keys = Object.keys(object);
console.log(keys); // basically it will return arrays of keys

const values = Object.values(object);
console.log(values);  // it will also return arrays of values 