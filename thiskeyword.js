// this keyword 
// refers to the object that is executing the function 

// const obj = {
//     name : "prakash",
//     displayMsg : function(){
//         console.log(this.name); // when a fuction is executed by object this printts all the // implicit binding this keyword to the object 
//     }
// };

// obj.displayMsg();
// console.log(obj); // both are same when u use this 

// // 

// function calculateSum(){
//     console.log(this); // here it refers global object 
// }

// calculateSum();




const user1  = {
    name : "harsh ",
    showName : function(){
        console.log(this.name);
    },
};


const user2  = {
    name : "prakash",
    showName : function(){
        console.log(this.name);
    },
};



const user3 = {
    name : "ashish ",
    showName : function(){
        console.log(this.name);
    },
};


user1.showName();
user2.showName();
user3.showName();

// explicit binding 


