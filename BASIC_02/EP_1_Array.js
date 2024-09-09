
    
//     let arr=[1,2,2,,3,3,3,3,3,3,3,3,3,3]
//     console.log(arr);
//     console.log(arr[13]);
//     console.log(typeof arr);//returns  an object
//     // so the type of array is **OBJECT**
//     // in JS the array can be of mixed data types as well as it can be resized for future use
//     //in JS the array can be declared in two ways :: 
//     // direct array => let const =[1,2];
//     //by an object  => let arr= new Array(1,2);


//     //now lets see all the basic methods of an array 

//     let arr1=['vicky','acharjee','21'];
//     console.log(arr1);
//     console.log(arr1[0]);
//     console.log(arr1[1]);
//     console.log(arr1[2]);

//    //push() method
//    arr1.push('shillong');
//    console.log("for push",arr1);
//    arr1.push('Meghalaya');
//    console.log("for push",arr1);

//    //pop()
//    arr1.pop();
//    console.log("for pop",arr1);//last element will be removed

//    //unshift()
//    arr1.unshift('INDIA');
//    console.log("for unshift",arr1);//adds an eleet at the first position of an index

//    //shift()
//    arr1.shift();
//    console.log("for shift",arr1);//itbasically removed the first element from an array element

//   //slice()
//   console.log("for slice",arr1.slice(1,2));//acharjee

//   //splice()
//   //   console.log(arr1.splice(1,2));//"acharjee"  "21"
//   console.log("for splice",arr1);//The splice is tricky to understnd since its actaually made a change in the original array elements only

//   //include()
//  console.log(arr1.includes('2'));//false (since ikts doesnt contains the elent in the given array)
//  console.log("for include",arr1.includes('21'));//True


//  //indexof()
//  console.log(arr1.indexOf('vicky'));// since its contains on the zero elemnt in an array
//  console.log("for indxof",arr1.indexOf('22'));// Returns -1 if it dosent contains the element on a given array


// //++++++++++++++++++++object+++++++++++++++++
// //Remember bydefault in js if we will check typeof any initialized array then it returns an object.. and individually checking then returns based on given condition like num, str, obj, etc
// console.log("test for array");

// const arrr=[1,2,3,4,5];
// console.log(typeof(arrr));

// const arrr2=["vicky",2,3,4,5];
// console.log(typeof(arrr2[0]));

// const arr3=[{name:"vicky"},{age:21}]
// console.log(typeof(arr3[0]));

// console.log(Boolean(1>0));


// --------------- Secons series------------------
// 1. array methods

//slice 
// const array=[1,2,3,4,5]
// console.log(array); //[1,2,3,4,5]
// const sliceArray=array.slice(1,3)
// console.log(sliceArray); //[2, 3]
// console.log(array); //[1,2,3,4,5] // we can observe that there is not change in the amin array variable

//splice
// const array=[1,2,3,4,5]
// console.log(array); //[1,2,3,4,5]
// const spliceArray=array.splice(1,3)
// console.log(spliceArray); //[2, 3, 4] // generally for the sake of sying it gives the until the last specified range specified by the user
// console.log(array); //[1, 5] // we can observe that there is a change in the main root array.... ***IMPORTANT*** Mark it that, any changes made on the leaf array via splice, then it directly reflects to the root array

// const array=[1,2,3,3,4,5]
// // const indexofArray=array.lastIndexOf(3)
// // console.log(indexofArray);
// const joinArray=array.join('?')
// console.log(joinArray); //1?2?3?3?4?5

// Array: part 2 (array mainpulation)

 // issue with push()
//  const myArr1=[1,2,3,4,5]
//  const myArr2=[6,7,8,9,10]
//  myArr1.push(myArr2)
//  console.log(myArr1) //[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ] we cam observe that whole myArr2 is taken as as element of myArr1 :: this whole [ 6, 7, 8, 9, 10 ] is taken as 6th lement as myArr1 
//  // so inorder to acces the elemnt 7: 
//  console.log(myArr1[5][1])

// issue with concat() // the diffrence makes here from push() is  in concat we need to store to another variable for displaying unlike in push() we can directly access without taking new variable
//  const myArr1=[1,2,3,4,5]
//  const myArr2=[6,7,8,9,10]
//  const result=myArr1.concat(myArr2)
//  console.log(result[7]) //8

// const result=[...myArr1,...myArr2]
// console.log(result);

// Flat method technique
const ar1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(ar1[2][2][2][1]); // outputs 10

const result=ar1.flat(Infinity)
// console.log(result);

// isArray => if variable is array then, returns as True else False
const vicky=[1,2]
const acharjee=1;
console.log(Array.isArray(acharjee)); //false
console.log(Array.isArray(vicky)); //true

//from method
const res=Array.from("vicky")
console.log(res); // converts string into array element as : [ 'v', 'i', 'c', 'k', 'y' ]

// from as object
const obj={name:"vicky",age:25}
const res2=Array.from(obj)
console.log(res2); // outputs as error

// of method
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
console.log('I want pizza'[4]); // returns n















