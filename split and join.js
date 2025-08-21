// split and join    ;

// palindrone strings : means if u r writing in the reverse order it looks same as before 

// const inputString = "MADAM";
// const arr = [1,2,3,4,5];
// console.log(arr.reverse());

const inputSTR = "harsh gaurav";
const arrOfChar = inputSTR.split("");
//console.log(arrOfChar);
arrOfChar.reverse();
console.log(arrOfChar);
const reverSTR = arrOfChar.join("");
console.log(reverSTR);

if(inputSTR === reverSTR){
    console.log("it is palindrone");
}else{
    console.log("it is not a palindrone");

}
