const arr=new Array(10);
console.log(arr);// empty array

arr.push(1)
console.log(arr);// [ <10 empty items>, 1 ]

arr[0]=1;
console.log(arr); //[ 1, <9 empty items>, 1 ]

// Re-assigning with const is not possible since the refrence cannot be changed
// arr=[1,2,3];
// console.log(arr); // error Assignment to constant variable.Since we should understand that individual elements or value can be changed but not its refrence

// Re-assigning with let, var is possible since its refrence can be changed
let arr2=new Array(10)
arr2=[1,2,3,4] //re-initialized again and a new pattern form
console.log(arr2);

// check the return of push method
let res=arr2.push(5);
console.log(res);// returns the length of an array since push() methof in JS returns the new length of an array

//lets check its type push()
console.log(typeof(res));// if the type is only number then the method will return a numeric length only very basic common sense

// check the return of pop mehod
const arr3=[1,2,3,5];
const result=arr3.pop()
console.log(result);// returns 5 since last elemnt form arr3 i.e 5 so thefive have been popped
console.log(typeof(result));

const pack=[]
// console.log(pack); // []
arr3.forEach((element)=>{
    pack.push(element*5)
})
const ans=arr3.map((e)=>e*10)
console.log(ans);
console.log(pack);

//testing the refrence with object
const obj={
    name:'vicky',
    age:21
}
console.log(obj);
obj={
  name:'vickyAcharjee',
  age:22
}
console.log(obj);