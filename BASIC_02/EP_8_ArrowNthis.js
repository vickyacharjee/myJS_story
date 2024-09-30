//This returns the context of the particulate object




//Arrow  Function returns this.name as undefined, since es6 does not support or recommend to use arrow function isnde objects
const obj={
    name:"vicky",
    age:21,
    session:true,
    func:()=>{
        console.log(this.name);
    }
}

//Anonymous Function returns this.name as vicky

// const obj={
//     name:"vicky",
//     age:21,
//     session:true,
//    func:function (){
//         console.log(this.name);
//     }
// }
obj.func()


console.log("Arrow  functions");
// Arrow functions

const obj1=(n1,n2)=>{
    return n1+n2;
}

console.log(obj1(1,2));

//implicit Arrow Func

const obj2=()=>console.log("hello from implicit");
obj2()

// const obj3=()=>(console.log("hello from implicit"))
// obj3()

//throws an undefined bcoz of not use of ()
// const obj3=()=>{name:21}
// console.log(obj3());

//true, coz only use of arrow functions of object as ()
const obj3=()=>({name:21})
console.log(obj3());

//Remeber explict means havong a use of return keyword as well consumptio  of mor more than 2 lines

if (!0) {
    console.log("true");
}