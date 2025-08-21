// fuctional borrowing call , apply,bind 

const user1 = {
    name:"harsh",
    age:99,
}



const user2 = {
    name:"yash",
    age:99,
    // implicit binding 
    displayMsg(){
        console.log(this.age);
    }
   
  };
 user2.displayMsg();

const user3 = {
    name:"rakesh",
    age:99,

};

    function sayHi(degree, year){
        console.log(this.name,degree,year);
    };

// user1.sayHi();
// sayhi fuction is repeatiing so we have to create separate function 

// sayHi.call(user1,"btech", 2015); // user 1 is object which wants to use this function sayhi
// sayHi.call(user2); // value of this is user2 ;
// when same fuction is used by so many objects then we will create a functon then we call it using this 


// // apply :
// sayHi.apply(user1 , ["b tech" , 2025]);   // in arrays as parametere of arrays 
// sayHi.apply(user2);


// explicit binding 



// bind method 

   const result = sayHi.bind(user3, "b.tech" );
   result(2025);  // basically bind returns the value this is diff we have to assign it into the variable then return it 
