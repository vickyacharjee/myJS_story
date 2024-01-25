
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
    console.log("hello");
  }
  //Anonymous function

  const user4=function(){
     console.log("hello");
  }


  console.log("Aroow starts here");
  //Now Arrow function

  const vic=()=>{
    console.log("Hello this is arrow function");
  }
  vic()

  //Aroow func with accepting parameter

  const vic2=(num1,num2)=>{
    return num1+num2;
  }

 console.log(vic2(2,2));//4
 console.log(vic2("2",2));//22
 console.log(vic2("2","22"));//222


 //Implicit return

const arrow=()=> console.log("vicky implicit return");
console.log(arrow());//returns an output//  vicky implicit return

const arrow2=(n1,n2)=> console.log(n1+n2);
console.log(arrow2(1,2));//returns an output // 3 ...implicitly
// Ala wys remeber that once we use curly brace sthen we need to use return statement manadatorily


//Explicit return
//we use explicit return wen we use return statement

const vic5=()=>{
    return "hello0";
}

console.log(vic5());

//Dealing with object implicitly


const obj=()=>({name:"vicky"})
console.log(obj());   
   
(function (){ 
    console.log("21");
 
})();
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
