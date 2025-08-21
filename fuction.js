// function as object property 

const obj = {
    name: "Harsh Gaurav",
    greetMsg: function(){   // using anonymous function 
        console.log("hello harsh wlcm to gfg");
    },

    bye(){  // using direct method to do not  write function
        console.log("tata bye bye ");
    }
}

//console.log(obj);
// obj.greetMsg();  how to accees function in object 

// another way 

obj.bye(); // calling a function 

