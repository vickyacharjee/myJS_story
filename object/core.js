const desc=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desc);

//    Throws an output as:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const user={
    name:"vicky Acharjee",
    age:21,
    isAvailable:false
}
console.log(user);
// { name: 'vicky Acharjee', age: 21, isAvailable: false }



console.log(Object.getOwnPropertyDescriptor(user,"name"));
//{
//   value: 'vicky Acharjee',
//   writable: true, // this indicates that the value of the object can be changed
//   enumerable: true,
//   configurable: true
// }


console.log(Object.getOwnPropertyDescriptor(user,"age"));
//{ value: 21, writable: true, enumerable: true, configurable: true }   // this indicates that the value of the object can be changed


console.log(Object.getOwnPropertyDescriptor(user,"isAvailable"));
//{ value: false, writable: true, enumerable: true, configurable: true }   // this indicates that the value of the object can be changed


// now with the help ofdefineProperty we will change its property content
Object.defineProperty(user,'name',{
        writable: false,
        enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));
// as we can see that the propert of writable is changed from true to false 
// {
//   value: 'vicky Acharjee',
//   writable: false,
//   enumerable: true,
//   configurable: true
// }

