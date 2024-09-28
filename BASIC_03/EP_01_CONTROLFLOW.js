
        //if condition
     

        console.log("vicky-acharjee");
        console.log("vicky");
        console.log(45+99);

    //   let age=45
    //     if (age>18) {
    //         console.log("yes i am avobe 18");
    //     }
    //     else{
    //         console.log("yes i am below 18");
    //     }


 
    if(true){
        console.log("first step");
        if (true) {
            console.log("seconf step");
            if (true) {
                console.log("third");
                
            }
        }
    }



    console.log("tic");
    if (true) {
       const name="vicky";
        if(name==undefined){
            console.log("its undefined");
            if (name===name) {
                console.log(" yo its true ");
            }
        }
        else{
            console.log(" yo its its defined");
        }

        
    }









// (function (){ 
// // Function Logic Here. 
// })();



// (()=>{
//     console.log("vickkkk");
// })();


// (()=>{
//     console.log("viccccc");
// })();



// (()=>{
//     console.log("BIC");
// })();



const v=123;
if (v) {
    console.log('yo');
    
}
if (function () {
    
}) {
    console.log('yoFunc');
    
}

let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote 2222" : "Not eligible to vote";

console.log(eligibility);



let age2 = 10;
let eligibility2 = (age2 >= 18) ? "Eligible to vote 2222" : "Not eligible to vote";

console.log(eligibility2);

let c='ccc'
console.log("ccc"===c);


console.log("-----second part--------");
// array
let arr=[];
if (arr) {
    console.log("true");
}
if (arr.length===0) {
    console.log("true");
}
//object
let obj={}
if (obj) {
    console.log("true from obj");
}
if (Object.keys(obj)) {
    console.log("true from object");
}

// Equality check:
console.log(false==false);// true
console.log(false=="");// true
console.log(""==0);// true

let val;
// with null
val=null??10;
console.log(val);

val=10??null;
console.log(val);

// with undefined
val=undefined??20;
console.log(val);

val=20??undefined;
console.log(val);

// with multiple values:
val=1??2??3??undefined;
console.log(val); // Note: always remember, it returns the first number, compulsorily except undefined and Null

// terniarily opeeartor:
const value=18;
value>=18 ? console.log("yo can vote"):console.log("You are not eligible");















