// // const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
// // console.log(shopping[2]);
// // const random = ["tree", 795, [0, 1, 2,[3,5,6]]];
// // console.log(random[2][3][1]);//5
// // random.push(121)
// // console.log(random[3]);
// // console.log(random);


// // const cities = ["Manchester", "Liverpool"];
// // const newLength = cities.push("Bristol");
// // console.log(typeof(cities)); // [ "Manchester", "Liverpool", "Bristol" ]
// // console.log(newLength); // 3
// // console.log(typeof(newLength)); // 3


// const user=['vicky','21','shillong']
// const user2=user.pop()
// console.log(user);
// console.log("deleted",user2);
// // [ 'vicky', '21' ]
// // deleted shillong


// const user1=['vicky','21','shillong']
// const user3=user1.push('india')
// console.log(user);
// console.log("length ",user3);

// const city = ["Manchester", "Liverpool"];
// const removedCity = city.pop();
// console.log(removedCity); // "Liverpool"

// const arr=['hi','this','vicky'];
// const arr2=arr;
// arr2[2]='vickyACharjee';
// console.log(arr2);
// console.log(arr);


// // const MESSAGE=108
// // const Message2=100
// // function getInfo(){
// //     console.log(Message2);
// //     // const MESSAGE='vicky' // error becasue scope has an refrence of outter Message too so collission happens 
// //     console.log(MESSAGE);
// //     const MESSAGE='101'
// // }
// // getInfo()

// if (Math.floor(Math.ceil(Math.random()*10)) > 2) {
//   var y = 5;
// }
// console.log(y); // ReferenceError: y is not defined

// // console.log();


// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++) {
// setTimeout(() => console.log(b[i]), 1000);
// }
// for (var index  = 0; index < b.length; index++) {
//   var test='hey i am alive'
// setTimeout(() => console.log(b[index]), 2000);
// }
// console.log(index);
// console.log(test);


// function vic(){
//   var anme='vicky'
// }

// console.log(anme);
// const arr=[1,2,3]
// for (var i = 0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// function name(name) {
// var name='vicky2'
//   console.log(name);
// }

// function name(name) {
// var name='vicky2'
//   console.log(name);
// }
// name('vicky')




// console.log(apple);

// let number=123;
// console.log(typeof(number));
// if (!isNaN(number)){ // if the variable contains a number then then returns a false
//   //true block
//   console.log(`yes ${number} is a number`);
// }
// else{
//   // false block
//   console.log('not a number');
// }

// console.log(-1 / 0); // Output: -Infinity
// console.log(21/5);


// let x;
// console.log(x); // undefined

// undefined and NULL 
// in the memory craetio phase a variable is been initialized as undefined
// where as NULL is a sepcial type of value

// let name;
// console.log('look here ',name);
// name ='vicky'
// console.log(name);
// name=undefined;
// console.log(name);
// name=null;
// console.log(typeof(name));
// console.log(name);

// let array=[1,2,3,'vicky']
// console.log(typeof(array));


const obj={
  name:'vicky',
  age:21 // i want the age to be deleted
}
delete obj.age;
console.log(obj.age);

/*

In JavaScript, there are several keywords and built-in methods related to object manipulation. Here are some of the commonly used ones:

delete: Deletes a property from an object.

javascript
Copy code
let obj = { a: 1, b: 2 };
delete obj.a; // Deletes property 'a' from obj
in: Checks if a property exists in an object (including inherited properties).

javascript
Copy code
let obj = { a: 1, b: 2 };
console.log('a' in obj); // Output: true
console.log('c' in obj); // Output: false
instanceof: Checks if an object is an instance of a specific class or constructor function.

javascript
Copy code
let arr = [];
console.log(arr instanceof Array); // Output: true
new: Creates an instance of a user-defined object or built-in constructor function.

javascript
Copy code
function Person(name) {
    this.name = name;
}
let john = new Person('John');
typeof: Returns the type of a variable or expression.

javascript
Copy code
let obj = {};
console.log(typeof obj); // Output: "object"
for...in: Iterates over the enumerable properties of an object (including inherited properties).

javascript
Copy code
let obj = { a: 1, b: 2 };
for (let prop in obj) {
    console.log(prop); // Output: "a", "b"
}
Object.keys(): Returns an array of a given object's own enumerable properties.

javascript
Copy code
let obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // Output: ["a", "b"]
Object.values(): Returns an array of a given object's own enumerable property values.

javascript
Copy code
let obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // Output: [1, 2]
Object.entries(): Returns an array of a given object's own enumerable property key-value pairs (as arrays).

javascript
Copy code
let obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2]]
Object.create(): Creates a new object with the specified prototype object and properties.

javascript
Copy code
let obj = Object.create(null); // Creates an empty object with no prototype
These are some of the keywords and methods commonly used when working with objects in JavaScript. Each serves a specific purpose in object manipulation and property access.
*/

// const obj2={
//   name: 'vicky',
//   age: 21,
//   address:function(){
//     console.log(`hi your name is ${this.name}, and your adress is shillong, Meghalaya`);
//   }
// }

// console.log(obj2.address());

// milli seconds to seconds
// 1000 ms = 1 second
// 2000 ms = 2 second


// function call(){
//  setTimeout(()=> console.log("hi i am called after 2 seconds"),5000)
// }

// call();

// adjsut the dialer
// let dialer=5;
// dialer=dialer*1000;

// function interval(){
//   setInterval(()=>console.log('hi i am called every after 2 seconds'),dialer)
// }
// interval()
// clearInterval(interval())

// // Define a function to be executed after a delay
// function sayHello() {
//     console.log("Hello!");
// }

// // Set a timeout to call the sayHello function after 2 seconds
// let timeoutId = setTimeout(sayHello, 2000);

// // Clear the timeout before it executes
// clearTimeout(timeoutId);

// const platform = navigator.userAgent;
// console.log(platform);

// if (platform.startsWith('Node')) {
//     console.log('using node');
// } else if (platform.startsWith('Mac')) {
//     console.log('Macintosh');
// } else if (platform.startsWith('Linux')) {
//     console.log('Linux');
// } else {
//     console.log('Unknown operating system');
// }

