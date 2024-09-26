
        //About this Method
        //.this this referes to the current context in within the scope 
        //Always reember in JS the Global Object is Window object...Repeat ==>Window Object
        //Example
        // Alwys remeber that once we use curly brace sthen we need to use return statement manadatorily
        // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
       const user={
        userName:"vicky",
        price:999,
        welcomeMessage:function(){
            console.log(`${this.userName},welcome to website`);
            console.log(this);
        }  
       }

    //    user.welcomeMessage();
       user.userName="AKA";
       user.welcomeMessage();

    console.log(this);
   
   //Example 2

   let iAmUser={
    name:"vicky_Acharjee",
    prof:"Developer",
    age:21,
    ReturnMessage:function(){
        console.log(`Hi!! ${this.name} welcome to the world of programming`);
        // console.log(this);
        
    }
   }
   iAmUser.ReturnMessage();
   
   console.log("Example 3 starts here");

   //Example 3

   function hello() {
   let userName="vic"
    console.log(this.userName);//also, remember that .this method is used inside the object.... so, in this acs it returns "Undefined"
   }
   hello();


   //ARROW FUNCTION
  //SYNTAX :: ()=> { .... }

  //ordinary function()
  function hello() {
    // console.log("hello");
  }
  //Anonymous function

  const user4=function(){
    //  console.log("hello");
  }


  console.log("Aroow starts here");
  //Now Arrow function

  const vic=()=>{
    // console.log("Hello this is arrow function");
  }
  vic()

  //Aroow func with accepting parameter

  const vic2=(num1,num2)=>{
    return num1+num2;
  }

//  console.log(vic2(2,2));//4
//  console.log(vic2("2",2));//22
//  console.log(vic2("2","22"));//222


 //Implicit return

const arrow=()=> console.log("vicky implicit return");
console.log(arrow());//returns an output//  vicky implicit return

const arrow2=(n1,n2)=> console.log(n1+n2);
// console.log(arrow2(1,2));//returns an output // 3 ...implicitly
// Ala wys remeber that once we use curly brace sthen we need to use return statement manadatorily


//Explicit return
//we use explicit return wen we use return statement

const vic5=()=>{
    return "hello0";
}

// console.log(vic5());

//Dealing with object implicitly

const obj=()=>({name:"vicky"})
console.log(obj());   
   
(function (){ 
    // console.log("21");
 
})();
  

console.log("---------------SecondPart-----------------");
const data={
  ProductName:"gta",
  price:999,
  welcomeMessage:function () {
    console.log("Hello ",this.ProductName);
    console.log(this); // NOTE: if we log this then the current context of the object is displayed.
  }
}
// console.log(data.welcomeMessage()); // hello gta
data.ProductName="igi" // override productName from gta to igi.
// console.log(data.welcomeMessage()); // hello igi
// console.log(this);// NOTE: this returns nothing since we are under node environment
                  // NOTE: same this inside browser environemt we would do then  it returned the global window object.

function callMe() {
  console.log(this);
}                  
// callMe() // this retruns the current context of this particular function.


//Arrow functions:
// 1. Arrow functions do not have their own this context.
// 2. Arrow functions do not have their own arguments object.
// 3. Arrow functions do not have their own super keyword.

// arrowOne() // again this throws as an error, since this is stored as a expression (variable) and it dosent have its own context 
const arrowOne=()=>{
  console.log("hello from arrow functions");
}

// implicit arrow functions:
// NOTE: VERY important, whenever we use arrow function implicitly then, its not madatory to use return functions.
const implicitArrow=()=> console.log(123);
const implicitArrow2=(n1,n2)=> n1+n2; //passing as parameter too 
const implicitArrow3=(n1,n2)=>(n1-n2); // if makes confuse then we are permitted to use () braces

// Explicit arrow functions:
// NOTE: VERY important, whenever we use arrow function explicitly then, its madatory to use return
// whenever {} braces comes then it is mandatory to use the return keyword.
const explicitArrow=()=>{
  return 123
};

// CONFUSION ARISE, we generally use explicit arrow functions, since implicit arrow functions, cant hadle objects, lets demonstarte it with an scenario:
const obj1={
  
}
// now using, implicit arrow function
// const implicitArrowFunction=(n1,n2)=>{name:"vickyA"} // incorrect way
const implicitArrowFunction=(n1,n2)=>({name:"vickyA"}) 
console.log(implicitArrowFunction(1,2)); // correct way




  
  
  
  
  
  
  
  
  
  
  
  
  
  
