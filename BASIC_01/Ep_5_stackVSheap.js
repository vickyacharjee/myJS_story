

let a={
    name:"vicky",
    age:22
}

// console.log(a.name);
// console.log(a.age);
// console.log(a.age);//this returns 22
// let b=a;
// a.age=24;//here we are basically making changes into heap memory

// console.log(a.age);//this return 24
// console.log(b.age);//this also returns 24

// REMEMBER STACK IS FOR PRIMITIVE 
// AND HEAP IS FOR NON PRIMITIVE


// console.log(a.age);

// This Example if for primitive datatype....(simple stack Demo)

// let name="vickyAcharjee";
// let name2=name;

// name2="VickyAcharjee14";

// console.log(name);
// console.log(name2);

// let user1={
//     name:"vicky",
//     age:21,
//     address:"shillong"
// }

// console.log(user1);// Here this was printing pure user1 value

// let user2=user1;

// user2.age=22;
// user2.address="Bengaluru";

// console.log(user2);
// console.log(user1);//Here this was printing pure user1 value but with the updated on since its allocation memory in heap is changed

// const myObj={
//     name:'vicky_Acharjee',
//     age:21,
//     address:'BLR'
// }


// //Destructue with the same passed obj name
// const{name:n}=myObj;
// const{name,age,address}=myObj;
// console.log(name);
// console.log(age);
// console.log(address);

// //Destructure individually with user Wished NAme
// console.log(n);

// second tiem practice
let  userOne={
    name:"vicky",
    age:21,
}

let userTwo=userOne
userTwo.name="legend"
userTwo.age=22
console.log("name",userOne.name," age",userOne.age);


