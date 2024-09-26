
        // function vic(){
        //     return "hello"
        // }
        // function vicc(){
        //     console.log("hello");
        // }

        // function userMe(name) {
        //     if(name===undefined){
        //         console.log("hey give certain values to me");
        //     }
        //     else{
        //         console.log(`Hello ${name}`);
        //     }

                       
        // }
        


        // function userMe(name="vicky") {
        //     if(!name){
        //         console.log(`${name} asiigned me with certain values`);
        //     }
        //     else{
        //         console.log(`Hello ${name}`);
        //     }
            
        // }
        // // console.log(userMe("vic"));
        // console.log(userMe("aa"));



        // function vic(){
        //     console.log("hello this vicky");
        // }

        // console.log(vic());

        // function MyNewArray(array) {
        //     return array[1];
            
        // }

        // console.log(MyNewArray([10,11]));


        // let user={
        //     name:"vicky_Acharjee",
        //     age:21,
        //     address:"Shillong"

        // }



        // function object(anyObj) {

        //     console.log(`Hello my name is ${anyObj.name} and i am ${anyObj.age} and i stay in${anyObj.address}`);
        // }

        // console.log(object(user));



        // const arr=[12,13,12,13];

        // function arr2(...val) {
        //     console.log(val);
            
        // }

        // console.log(arr2(arr));


    //     if(true){


    //     for (let index = 0; index < 10; index++) {
    //         console.log(index);
            
    //     }
    // }
    // console.log(index);


    // for(var i =2; i<10;i++){
    //     console.log(i);
    //  }
    // console.log(i);

    let a={
        name:"vic",
        age:21
    }
    
    let b=a;
    b.name="vicky"

    // console.log(a.name);


    let aa='vicky2'
    let bb=aa;
    // console.log(bb);
    bb="aka"
    // console.log(bb);


// ------------------------Functions Scond part----------------------------    

// Adding two number in general:
function myFunc(x,y){
    console.log( x+y);   
}
myFunc() // nan
myFunc(5,6) // 11

// using return keyword:
function myFuncTwo(a,b) {
    return a+b;
}
let res=myFuncTwo(1,2);
console.log(res);

console.log('1'+'a');

// Facts about return statement:
function myReturn(a,b) {
    console.log(a+b);
}
myReturn(5,6);

// Here we can see the main purpose of return statement
function myReturnTwo(a,b) {
    console.log(a+b); //  X WRONG METHOD
}
const result=myReturn(5,6);
console.log(result); //undefined

function myReturnThree(a,b) {
    return a+b; //  RIGHT METHOD
}
const result2=myReturnThree(5,6);
console.log(result); // 11

// NOTE: anything written after return statement passed in function will not be accepted

//--
// function callMe(name2) {
//     return `Hello ${name2}`
// }
// let call=callMe('vicky');
// console.log(call);

//--
function callMe(name="user") {
    return `Hello ${name}`
}
console.log(callMe());

//-- rest operator
function myShoppingCart(...value) {
    // console.log( value);
    let sum=0
    for(let i=0;i<value.length;i++){
    sum=sum+value[i];
    console.log(sum);
    }
}
myShoppingCart(1,2,3,4,5);//15

const obj={
    productName:"Ipone",
    price:10000,
}
function objFunc(info) {
return `The product name is ${info.productName} and its price is ${info.price}`
}
//standard way:
console.log(objFunc(obj));
//another way is:
console.log(objFunc(
    {
     productName:"samsung",
     price:20000,
    }
));

// passing as array
const myArray=[12,3,33,3];
function arrayFunc(arr){
    console.log("The  array is ", arr[1]);
}
// console.log(arrayFunc(myArray)); //The  array is  3

// console.log(arrayFunc([1,2,3])); //The  array is  2



















        


