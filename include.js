const displayMsg = " i need a job right now ";
// console.log(displayMsg.includes("need"));

if(displayMsg.includes("need")){
    console.log("person need a job");
}else{
    console.log("doesnt need a job");
}

// includes just check the word is present in the string or not 
// to check whether a string contains vowel or not ;
const vowels =" aeiou";
for(let char of displayMsg){
    if(vowels.includes(char)){
        console.log(`${char} is the vowel`);
    }else{
        console.log("this doesnt ");
    }
}


