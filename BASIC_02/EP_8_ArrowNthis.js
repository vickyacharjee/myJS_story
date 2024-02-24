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