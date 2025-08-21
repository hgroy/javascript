// sort the array means we have either chracter or numbers stored in the array and we have to sort them like alphabatecially and ascending or decending order 

const fruits = ["apple","cheery", "banana","ball"];
fruits.sort();
console.log(fruits); //// this comparison work character wise 

const numbers = [1,2,3,4,8,9,6,0,13,65];

function sortInAscendingOrder(a,b){
    return a - b;
}

function sortInDescendingOrder(a,b){
    return b - a;
}
numbers.sort(sortInAscendingOrder);
console.log(numbers);// it converts number into strings so the output is diff // utf 16 representation 

